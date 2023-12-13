function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceMayor = array.indexOf(Math.max(...array));
  return indiceMayor
}

module.exports = encontrarIndiceMayor;
