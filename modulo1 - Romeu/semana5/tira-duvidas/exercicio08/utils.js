export function calculaTotal(...produtos) {
  return produtos.reduce((acc, p) => {
    return acc + p.quantidade * p.valor
  }, 0)
}
