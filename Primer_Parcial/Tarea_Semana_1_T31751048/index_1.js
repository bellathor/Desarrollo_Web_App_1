var http = require('http');
var url = require('url'); 

http.createServer((req, res)=>{
    var q = url.parse(req.url, true);
    var datos = q.query;
    
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('EJERCICIO 1\n');
    res.write('Bienvenido ' + datos.nombre_usuario);

    res.end();
}).listen(3030);

// parametros: localhost:3030/?nombre_usuario=jorge