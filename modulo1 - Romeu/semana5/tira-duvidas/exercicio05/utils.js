export function somaTudo(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0)
}
