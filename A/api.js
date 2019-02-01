/*Nome: Gabriel de Freitas Garcia
Objetivo: Fazer um programa em node.js que receba uma tabela csv processe os dados e devolva um JSON à requisição*/
main = function(){
  var parse = require('./parse') //Módulo que eu criei que parseia os dados e transforma em JSON. MUITO IMPORTANTE!!!!! OS DOIS ARQUIVOS, api.js e parse.js, PRECISAM ESTAR NA MESMA PASTA PARA FUNCIONAR!!!!
  var http = require('http') //Módulo HTTP
  var port = 5000; //Porta aleatória que escolhi
  var server = http.createServer(); //Cria o servidor
  server.on('request', function(req, res) { //ativa o servidor quando recebe um request
      var data = ''; //Dados vazios, por enquanto
      req.on('data', function(callback) { //Entra no objeto request e acessa os dados
          data += callback.toString(); //Vai recebendo os dados, transformando em string e concatenando
      });
      req.on('end', function() { //Realiza no final da requisição
          var json = parse.parse(data) //pega os dados e manda pra função que parseia
          json = JSON.stringify(json,null,1); //transforma isso em string
          res.writeHead(200, {'Content-Type': 'json'}); //Cria cabeçário que diz que o conteúdo é JSON
          res.write(json) //Devolve pra quem requisitou
          res.end(); //Termina requisição
      });
  });
  server.listen(port); //Manda server ouvir evento de acesso à porta que escolhi
}

main() //chama função main
//Agradeço a Deus por ter cuidado de mim por toda a minha vida e por estar me ajudando sempre, a cada instante.
