// JS Game

let maxNumber = 1000;
let secretNumber = parseInt(Math.random() * maxNumber + 1); // só com o 10 fica entre 0 - 9 com o +1 temos entre 1 - 10
console.log(secretNumber);

let kick;
let tentativas = 1;


// Estrutura de repetição: Enquanto o chute não for igual ao número secreto
while (secretNumber != kick) {
    kick = prompt(`choose a number from 1 to ${maxNumber}!`);

    // se o chuter for igual ao número secreto
    if (secretNumber == kick) {
        break;
        // console.log(`Usuário acertou, sendo o número ${secretNumber}`);
    } else {
        if (secretNumber < kick) {
            alert(`O número secreto é menor que ${kick}`)
        } else {
            alert(`O número secreto é maior que ${kick}`)
        }
    } tentativas++;
}

// Operador Ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai!, você descobriu o número secreto ${secretNumber} com ${tentativas} ${palavraTentativa}!`);

/* Sem operador ternário
if (tentativas > 1){
    alert(`Isso ai!, você descobriu o número secreto ${secretNumber} com ${tentativas} tentativas!`)
} else {
    alert(`Isso ai!, você descobriu o número secreto ${secretNumber} com apenas ${tentativas} tentativa!`)
}
*/
