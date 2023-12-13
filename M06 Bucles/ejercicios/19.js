function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  if (!Number.isInteger(n) || n < 1) {
    return "Debe ser un número entero positivo.";
  }
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}


module.exports = sumarHastaN;
