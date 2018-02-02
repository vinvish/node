var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80, '35.154.134.163');
console.log('Server running at http://35.154.134.163:80/');
