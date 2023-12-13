function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var suma = arrayOfNums.reduce((suma, num) => suma + num, 0);
  return suma;
}

module.exports = agregarNumeros;
