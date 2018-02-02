var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '13.126.117.107');
console.log('Server running at http://13.126.117.107:8080/');
