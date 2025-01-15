function isFibonacci(n) {
  let a = 0, b = 1;
  while (b < n) {
      let temp = a;
      a = b;
      b = temp + b;
  }
  return b === n || n === 0;  // Verifica se n pertence à sequência
}

const numero = 34;  // Número para verificar
if (isFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
