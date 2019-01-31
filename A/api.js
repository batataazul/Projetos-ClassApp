/*Nome: Gabriel de Freitas Garcia
Objetivo: Fazer um programa em node.js que receba uma tabela csv processe os dados e devolva um JSON à requisição*/
main = function(){
  var http = require('http')
  var port = 5000;

  var server = http.createServer();
  server.on('request', function(req, res) {
      var data = '';
      req.on('data', function(chunk) {
          data += chunk.toString();
      });
      req.on('end', function() {
          console.log("Batata frita azul\n" + data);
          res.write('hi');
          res.end();
      });
  });

  s.listen(port);
}
main()
//Agradeço a Deus por ter cuidado de mim por toda a minha vida e por estar me ajudando sempre, a cada instante.
