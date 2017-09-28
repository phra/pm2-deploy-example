const http = require('http');

// Create an HTTP tunneling proxy
const srv = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});

srv.listen(1337, '127.0.0.1');
