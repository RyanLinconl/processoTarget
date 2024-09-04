const readline = require('readline');

function isPerfectSquare(x) {
    let s = Math.sqrt(x);
    return s * s === x;
}

function isFibonacci(n) {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (input) => {
    let num = parseInt(input, 10);

    if (isNaN(num)) {
        console.log('Por favor, digite um número válido.');
    } else if (isFibonacci(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }

    rl.close();
});
