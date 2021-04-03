// import importCore from '../core.js'
// importCore.isEven(10)
import http from "http"

//created a server 
const server=http.createServer()

//events
server.on('request', myfunc)


function myfunc(request, response){

   console.log("Request:    ", request.url)
   response.writeHead(200,{"Content-Types":"text/plain"})
   response.write("Hello New World")
   response.end() 
}
server.listen(8889)
