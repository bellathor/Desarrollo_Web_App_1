var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var data = q.query;
    var resultado;
    res.writeHead(200, {'content-type': 'text/plain' });

    res.write('EJERCICIO 2\n');

    resultado = parseFloat(data.numero) * 2;
    res.write('El doble del primer numero es = ' + resultado + '\n\n');

    resultado = parseFloat(data.numero) * 3;
    res.write('El triple del segundo numero es = ' + resultado);

    res.end();
}).listen(3030);

// parametros: localhost:3030/?numero=2