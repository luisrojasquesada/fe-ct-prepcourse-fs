function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si es positivo o menor que 10.
  // Retorna false en caso contrario.
  // Tu código:
  if (a % 2 === 0 && a < 10){
    return true
  } else {
    return false
  }
}

module.exports = esPositivoOInferiorA10;