var http = require("http")
function myfunc(request, response){
   console.log("My app got started")
   response.writeHead(200,{"Content-Types":"text/plain"})
   response.write("Hello World")
   response.end() 
}
http.createServer(myfunc).listen(8888)

