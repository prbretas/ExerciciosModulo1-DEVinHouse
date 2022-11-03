class CalculadorDeAreas {
  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }

  calcular() {
    let resultado = 0;

    switch (this.tipo) {
      case "triangulo":
        resultado = (this.base * this.altura) / 2;
        break;

      case "quadrado":
      case "retangulo":
        resultado = this.base * this.altura;
        break;

      default:
        throw new Error("Poligono nao identificado");
    }
    return resultado;
  }
}

let calculador = new CalculadorDeAreas("triangulo", 6, 8);
const areaDoTriangulo = calculador.calcular();

calculador = new CalculadorDeAreas("quadrado", 4, 4);
const areaDoQuadrado = calculador.calcular();

calculador = new CalculadorDeAreas("retangulo", 4, 4);
const areaDoRetangulo = calculador.calcular();


console.log(areaDoTriangulo, areaDoQuadrado, areaDoRetangulo)