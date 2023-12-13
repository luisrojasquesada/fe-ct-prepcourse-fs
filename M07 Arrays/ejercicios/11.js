function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var multiplicacion = array.map((elemento, indice) => elemento * indice);
  return multiplicacion;
}

module.exports = multiplicarElementosPorIndice;
