function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
    do {
      if (mes < 1 || mes > 12) {
        console.log("Mes no válido. Ingresa un número entre 1 y 12.");
        mes = parseInt(prompt("Ingresa un número de mes válido:"));
      }
    } while (mes < 1 || mes > 12);

    switch (mes) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return 31;
      case 4: case 6: case 9: case 11:
        return 30;
      case 2:
        return 28; 
    }
  }

module.exports = diasEnMes;
