main = function(){
  var http = require('http');
  http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('Digite aqui sua tabela CSV:\n');
  }).listen(5000);
}
main()
