function fibonacci(endNumber){
    let fibNumber = [0, 1]
    while (fibNumber[fibNumber.length - 1] < endNumber){
        fibNumber.push(fibNumber[fibNumber.length - 1] + fibNumber[fibNumber.length - 2])
    }
    return fibNumber
}

function hasOnFibonacci(number){
    return fibonacci(number).includes(number);
}

function verificaFibonacci(){
    let number = parseInt(prompt("Digite um numero: ", 0))
    let result = hasOnFibonacci(number)

    if(result){
        console.log(`O número ${number} pertence a sequência Fibonacci`)
    }
    else{
        console.log(`O número ${number} não pertence a sequência Fibonacci`)
    }
}

verificaFibonacci()