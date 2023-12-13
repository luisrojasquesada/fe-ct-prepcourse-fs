function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "Deben ser números enteros positivos.";
  }
  if (a > b) {
    return "El primer número debe ser menor o igual al segundo.";
  }
  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto;
}


module.exports = productoEntreNúmeros;