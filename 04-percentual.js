const faturamentoPorEstado = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

function calcularPercentual(faturamentoPorEstado) {
  const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr, 0);
  for (let estado in faturamentoPorEstado) {
      let percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
      console.log(`O percentual de ${estado} é: ${percentual.toFixed(2)}%`);
  }
}

calcularPercentual(faturamentoPorEstado);
