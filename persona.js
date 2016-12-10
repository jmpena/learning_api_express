var Persona = function (nombre, apellido) {
  var obj = {
    nombre: nombre,
    apellido: apellido,
    nombreCompleto: function(){
      return nombre + ' ' + apellido;
    }
  }

  return obj;
}

module.exports = Persona;
