function inverterString(str) {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
  }
  return resultado;
}

const string = 'exemplo de string';
console.log(inverterString(string));  // Resultado: gnirts ed olpmexe
