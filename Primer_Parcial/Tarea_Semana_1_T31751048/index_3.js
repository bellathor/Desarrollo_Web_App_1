var http = require('http');
var url = require('url');

http.createServer((req, res)=>{
    var q = url.parse(req.url, true);
    var datos = q.query;
    var resultado;

    res.writeHead(200, {'content-type':'text-plain'});

    res.write('EJERCICIO 3\n');
    resultado = parseFloat(datos.num1) * parseFloat(datos.num2);
    res.write('La multiplicacion de estos 2 numeros es: ' + resultado + '\n\n');

    resultado = parseFloat(datos.num1) / parseFloat(datos.num2);
    res.write('La division de estos 2 numeros es: ' + resultado);
    
    res.end();
}).listen(3030);

//parametros: localhost:3030/?num1=2&num2=2