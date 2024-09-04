const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao carregar o arquivo JSON:', err);
        return;
    }

    const faturamentoMensal = JSON.parse(data);
    const resultado = calcularFaturamento(faturamentoMensal);

    console.log(`Menor valor de faturamento: ${resultado.menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: ${resultado.maiorValor.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
});

function calcularFaturamento(faturamentoMensal) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let soma = 0;
    let diasComFaturamento = 0;

    faturamentoMensal.forEach(dia => {
        if (dia.valor > 0) {
            if (dia.valor < menorValor) menorValor = dia.valor;
            if (dia.valor > maiorValor) maiorValor = dia.valor;
            soma += dia.valor;
            diasComFaturamento++;
        }
    });

    const media = soma / diasComFaturamento;
    const diasAcimaDaMedia = faturamentoMensal.filter(dia => dia.valor > media).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}
