# Deno_Learning_Journey
Deno is a nwe tool for us to run JS outside of the browser
--> 1. support JS and TS
--> 2. supports URL imports and modern JS features
--> 3. so called 'secure by default' and require execution permissions

### Inspired by Node.js
In fact, Deno is created by the founder of the Node.js which is created to solve and improve the bug and features of Node.JS
--> 1. Node only support JS but not TS
--> 2. Nod.js doesn't know execution permissions which refers to any scripts can do anything

### What can you build with Deno?
- build any kind of websites with Deno
- server-side rendered with views templating engines 
- APIs like REST AND GRAPHql APIs

There are numerous updates and improvements and lets start to explore it now!

## What kind of Web App do we want to Build?
1. APIs (provides endpoints which return json file — data) 
-> require standalone frontend app
2. Server-side rendered view (HTML element) 


## Using "Oak" and Dynamic Template
Oak is a middleware-focused Deno framework for building web-application
--> inspired by the "Koa" from "node.js"

### Comparison between setting up the web server manually and using Oak
```
//Set up the server by Oak
import {Application, Router} from 'https://deno.land/x/oak/mod.ts'; //can specific the version for improving the stability 



const app = new Application();

const router = new Router();

router.get('/', (ctx) => {
 ctx.response.body = 
 `<h1>Welcome to Deno Land</h1>
  <form action="/land" method="POST"
   <input tyoe="text" name="new">
   <button type="submit">Submit</button>
  </form>`;
  
  ctx.response.type = 'text/html';
 });
 
router.post('/land', async(ctx) => {
   const body = await ctx.request.body();
   const new = body.value.get('new');
   ctx.response.redirect('/');
  });
 
app.use(async (ctx, next) => {
  console.log('Middleware');
  await next();
})

app.use(router.routes());
app.use(router.allowedMethods());


await app.listen({port: 3000});

```
### Set up the server manually 
```
import { serve } from 'https://deno.land/std@0.51.0/http/server.ts';

const server = serve({ port: 3000 });

for await (const request of serve) {
  if (
    request.method === 'POST' &&
    request.url === '/store-message' &&
    request.contentLength
  ) {
    const buffer = new Uint8Array(request.contentLength);
    let totalBytesRead = 0;

    while (true) {
      const bytesRead = await request.body.read(buffer);
      if (bytesRead === null) {
        break;
      }
      totalBytesRead += bytesRead;
      if (totalBytesRead >= request.contentLength) {
        break;
      }
    }

    await Deno.writeFile('user-message.txt', buffer);
    const decoder = new TextDecoder();
    const data = decoder.decode(buffer);
    console.log(data);

    const headers = new Headers();
    headers.set('Location', '/confirm');
    request.respond({ headers: headers, status: 303 });
  } else {
    const headers = new Headers();
    headers.set('Content-Type', 'text/html');

    const body = `
      <h2>Our First App</h2>
      <form action="/store-message" method="POST">
        <input type="text" name="message">
        <button type="submit">Submit</button>
      </form>
    `;

    request.respond({ body: body, headers: headers });
  }
}

```
## Ways to store data in Deno Apps
1.) Store in Variables 
-> can provide quick access and great performance but data doesb't persist after restart the app
2.) Store in File System
-> data is still there after restarting the app but relatively slow access 
3.) Store in Database
-> data does persist and relatively fast access compare with FS



