function sumar(valor1: number, valor2: number): number {
  return valor1 + valor2;
}

const sumarArrow = (valor1: number, valor2: number): number => valor1 + valor2;

const dividir = function(a: number, b: number): number {
  return a/b;
}

function imprimir() {
  console.log(sumarArrow(1, 2));
}

imprimir();
