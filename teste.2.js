// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibona(num) { 
  let fib = [0,1];
  for (i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];

    if (fib[i] === num) {
      return `O numero ${num} pertence a sequencia fib[i] é ${fib[i]}`
    } 
  }
  return `O numero ${num} não pertence a sequencia fig[i] é ${fib[i]}`
}

