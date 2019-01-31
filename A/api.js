/*Nome: Gabriel de Freitas Garcia
Objetivo: Fazer um programa em node.js que receba uma tabela csv processe os dados e devolva um JSON à requisição*/
main = function(){
  var parse = require('./index')
  var http = require('http')
  var port = 5000;

  var server = http.createServer();
  server.on('request', function(req, res) {
      var data = '';
      req.on('data', function(callback) {
          data += callback.toString();
      });

      req.on('end', function() {
          var json = parse.parse(data)
          json = JSON.stringify(json,null,1);
          console.log("Batata frita azul\n" + data);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(json)
          res.end();
      });
  });

  server.listen(port);
}
main()
//Agradeço a Deus por ter cuidado de mim por toda a minha vida e por estar me ajudando sempre, a cada instante.
