// Desafios 1

// 01 - Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");

// 02 - Declare uma variável chamada nome e atribua a ela o valor "Lua".
let espaço = "Lua";

// 03 - Crie uma variável chamada idade e atribua a ela o valor 25. 
let idade = 25;

// 04 - Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// 05 - Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

// 06 - Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos");

// 07 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// 08 - Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nomeUsuario = prompt("Qual seu nome?");

// 09 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade02 = prompt("Qual sua idade?");


// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade02 >= 18) {
    alert("Pode tirar a habilitação!");
} else {
    alert("Você é muito jovem, pequeno Padawan...");
}



/////////////////////////////////////////////////////////////////////////////////////

// Desafio 2

// 01 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt('Qual o dia da semana?');

if (diaSemana.toLowerCase == Sábado || diaSemana.toLowerCase == Domingo) {
    alert("Um ótimo final de semana para você!");
} else {
    alert("Boa semana!");
}

// 02 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let number = prompt('Digite um número.');

if(number > 0 ) {
    alert('Seu número é positivo!')
} else {
    alert('Seu número é negativo!')
}

// 03 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let score = prompt('Quantos pontos você fez?');

if (score >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente denovo, little Padawan!');
}

// 04 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 1000;
alert(`Você tem R$${saldo}`);

// 05 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Qual é o seu nome?');
alert(`Seja Bem-Vindo ${nome}`);

/////////////////////////////////////////////////////////////////////////////////////

// 01 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10) {
    alert(contador);
    contador++;
}

// 02 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador02 = 10;

while (contador02 >= 0) {
    alert(contador02);
    contador02--;
}

// 03 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contador03 = parseInt(prompt('Insira um número para fazer um contagem regressiva!'));

while (contador03 >= 0) {
    console.log(contador03);
    contador03--;
}

// 04 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let maxNumber = parseInt(prompt('Insira um número máximo para fazer um contagem progressiva!'));
let contador04 = 0;

while (contador04 <= maxNumber) {
    console.log(contador04);
    contador04++;
}

/////////////////////////////////////////////////////////////////////////////////////

// Desafios finais

// 01 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Seja Bem-Vindo!')

// 02 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nomeC = prompt('Qual é seu nome?');
console.log(`Olá, ${nomeA}!`);

// 03 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nomeA = prompt('Qual é seu nome?');
alert(`Olá, ${nomeC}!`);

// 04 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let program = prompt(`${nomeA}, qual a linguagem de programação que você mais gosta?`)
console.log(program);

// 05 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// 06 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10;
let valor2 = 20;

let resultado;
let resultado2;

resultado = valor1 + valor2;
resultado2 = valor1 - valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado2}.`);

// 07 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idadeC = parseInt(prompt('Qual é sua idade?'));

if (idadeC > 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 08 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numerO = parseInt(prompt("Digite um número, seja ele negativo, 0 ou positivo."));

if (numerO > 0) {
    alert("Seu número é positivo!");
} else {
    if (numerO < 0) {
        alert ("Seu número é negativo!");
    } else {
        alert ("Seu número é 0");
    }
}

// 09 - Use um loop while para imprimir os números de 1 a 10 no console.
let cont = 1;

while (cont <= 10) {
    console.log(cont);
    cont++;
}

// 10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 4;

if (nota >= 7) {
    console.log("Você foi aprovado!");
} else {
    console.log("Você foi reprovado!");
}

// 11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let aleat11 = parseInt(Math.random());
console.log(aleat11);

// 12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let aleat12 = parseInt(Math.random() * 10 + 1);
console.log(aleat12);

// 13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let aleat13 = parseInt(Math.random() * 1000 + 1);
console.log(aleat13);
