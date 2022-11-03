export default function somar(...numeros) {
  let resultado = 0;
  numeros.forEach((numero) => (resultado += numero));
  return resultado;
}

export const PI = 3.14;
