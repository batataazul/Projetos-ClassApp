main = function(){
  var http = require('http');
  var port = 5000;

  var s = http.createServer();
  s.on('request', function(req, res) {
      console.log(request.method);

      var data = '';
      req.on('data', function(chunk) {
          data += chunk.toString();
      });
      req.on('end', function() {
          console.log(data);
          res.write('hi');
          res.end();
      });
  });

  s.listen(port);
}
main()
