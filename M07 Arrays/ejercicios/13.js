function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const sum = resultadosTest.reduce((acc, nota) => acc + nota, 0);
  const average = sum / resultadosTest.length;
  return average;
}

module.exports = promedioResultadosTest;
