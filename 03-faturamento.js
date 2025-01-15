const faturamento = require('./data/faturamento.json');

function calcularFaturamento(faturamento) {
    let menor = Infinity;
    let maior = -Infinity;
    let total = 0;
    let diasComFaturamento = 0;
    
    faturamento.forEach(dia => {
        if (dia.valor > 0) {
            total += dia.valor;
            diasComFaturamento++;
            if (dia.valor < menor) menor = dia.valor;
            if (dia.valor > maior) maior = dia.valor;
        }
    });

    const media = total / diasComFaturamento;
    const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

    console.log(`Menor faturamento: ${menor}`);
    console.log(`Maior faturamento: ${maior}`);
    console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
}

calcularFaturamento(faturamento);
