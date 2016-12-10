var express = require('express');
var app = express();
var Persona = require('./persona.js');

app.get('/', function (req, res) {
    var persona = new Persona('Jose', 'Pena Jerez');
    console.log(persona.nombreCompleto());

   res.send('Hello World');
});

app.post('/api/personas',function (req,res) {
    // cPersona.nombre = req.body.nombre;
    // cPersona.apellido = req.body.apellido;
   res.send("");
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
