function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let caracteres = texto.split('');
  let invertido = caracteres.reverse();
  let textoInvertido = invertido.join('');

  return textoInvertido;

}

module.exports = invertirTexto;