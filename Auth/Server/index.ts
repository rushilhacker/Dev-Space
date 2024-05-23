const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();
const PORT = 3000;

const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'eKCVjlGU7VBTgaz5F0OLHdx7Vx2BaRoc',
    issuerBaseURL: 'https://dev-6o2sirlu.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req: { oidc: { isAuthenticated: () => any; }; }, res: { send: (arg0: string) => void; }) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


https.createServer({
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
}, app).listen(PORT, (error: any) => {
    if (!error)
        console.log(`HTTPS Server is Successfully Running, and App is listening on http://localhost:${PORT}`);
    else
        console.log("Error occurred, server can't start", error);
});
