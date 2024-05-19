import { app } from './Initializations';
import { addUserQuery, findAllUsers } from './Database'

app.get('/AddNewUser/', async (c) => {

    const body = await c.req.parseBody()
    addUserQuery.run(body['image'].toString(), body['username'].toString(), body['first_name'].toString(), body['last_name'].toString())
})

export const app_complete = app
