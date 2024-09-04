const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

function calcularPercentuais(faturamento) {
    const percentuais = {};
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2) + '%';
    }
    return percentuais;
}

const percentuaisEstados = calcularPercentuais(faturamentoEstados);

console.log('Percentual de representação por estado:');
for (const estado in percentuaisEstados) {
    console.log(`${estado}: ${percentuaisEstados[estado]}`);
}