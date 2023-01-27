const http = require('http');
const url = require('url');
const mysql = require('mysql');



http.createServer((req, res) => {
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ejercicio1_dappwb1'

    });

    res.writeHead(200, { 'Content-Type': 'text/json' });
    var q = url.parse(req.url, true);
    var datos = q.query;

    con.connect((error) => {
        if (error) throw err;
        console.log('Se establecion conexion correctamente.!');
        let sql = "";
        let valores = [];
        switch (datos.opcion) {
            case 'insert':
                if (datos.tabla == 'personas') {
                    valores = [datos.nombre, datos.apellido, datos.fecha_nacimiento];
                    sql = 'INSERT into personas (Nombre, Apellido, Fecha_Nacimiento) VALUES (?)';
                    con.query(sql, [valores], (err, result) => {
                        if (err) throw err;
                        res.write('Registro completado, numero de filas afectadas: ' + result.affectedRows);
                        console.log('Registro completado, numero de filas afectadas: ' + result.affectedRows);
                        res.end();
                    })
                } else if (datos.tabla == 'telefonos') {
                    valores = [datos.telefono, datos.id];
                    sql = 'INSERT into telefonos (Telefono, ID_Persona) VALUES (?)';
                    con.query(sql, [valores], (err, result) => {
                        if (err) throw err;
                        res.write('Registro completado, numero de filas afectadas: ' + result.affectedRows);
                        console.log('Registro completado, numero de filas afectadas: ' + result.affectedRows);
                        res.end();
                    })
                }
                break;
            case 'select':
                if (datos.tabla == 'personas') {
                    sql = 'SELECT * FROM personas';
                    con.query(sql, (error, result) => {
                        if (error) throw error;
                        res.write(JSON.stringify(result));
                        res.end();
                    })
                } else if (datos.tabla == 'telefonos') {
                    sql = 'SELECT * FROM telefonos';
                    con.query(sql, (error, result) => {
                        if (error) throw error;
                        res.write(JSON.stringify(result));
                        res.end();
                    })
                }
                break;
            case 'update':
                if (datos.tabla == 'personas') {
                    valores = [datos.nombre, datos.apellido, datos.fecha_nacimiento, datos.id];
                    sql = 'UPDATE personas set Nombre = ?, Apellido = ?, Fecha_Nacimiento = ? WHERE ID_Persona = ?';
                    con.query(sql, valores, (err, result) => {
                        if (err) throw err;
                        res.write('Se actualizaron datos del id: ' + datos.id + ' , numero de filas afectadas: ' + result.affectedRows);
                        res.end();
                    })
                } else if (datos.tabla == 'telefonos') {
                    valores = [datos.telefono, datos.id_persona, datos.id];
                    sql = 'UPDATE telefonos set Telefono = ?, ID_Persona = ? WHERE ID_Persona = ?';
                    con.query(sql, valores, (err, result) => {
                        if (err) throw err;
                        res.write('Se actualizaron datos del id: ' + datos.id + ' , numero de filas afectadas: ' + result.affectedRows);
                        res.end();
                    })
                }
                break;
            case 'delete':
                if (datos.tabla == 'personas') {
                    sql = 'DELETE * from personas WHERE ID_Persona = ?';
                    con.query(sql, datos.id, (error, result) => {
                        if (error) throw error;
                        res.write('Se elimino el id: ' + datos.id + ' numero de filas afectadas: ' + result.affectedRows);
                        res.end();
                    })
                } else if (datos.tabla == 'telefonos') {
                    sql = 'DELETE * from telefonos WHERE ID_Telefono = ?';
                    con.query(sql, datos.id, (error, result) => {
                        if (error) throw error;
                        res.write('Se elimino el id: ' + datos.id + ' numero de filas afectadas: ' + result.affectedRows);
                        res.end();
                    })
                }
                break;
        }
    })


}).listen(3030);



