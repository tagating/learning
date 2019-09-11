'use strict'
const http = require('http');
const port = 3000;

const testReply = (request)=>{
  return (request.url==='manjot'?"singh":"paul")
}

const requestHandler = (request, response) => {  
  console.log(testReply(request));
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
exports ={
  testReply
}

