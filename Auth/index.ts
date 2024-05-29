import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()
app.get('/', (c) => c.text('Hello Bun!'))
app.get('/a', serveStatic({path :'//client/pages/signup.htm'}))

const port = process.env.PORT

Bun.serve( { 
    port: 3000, 
    development: true,
    fetch: app.fetch, 
  } )
  
console.log(`runnin da server on ${port}`)  