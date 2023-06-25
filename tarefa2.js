const nome = prompt("Qual é o seu nome?:");
const idade = prompt("Quantos anos você tem?:");
const linguagem = prompt("Qual linguagem de programação você está estudando?:");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(msg);

const estudo = prompt(`Você gosta de estudar ${linguagem}? Responda com um numero 1 - SIM e 2 - NÃO.`);

if (estudo == 1){
    alert('1 > Muito bom! Continue estudando e você terá muito sucesso.');
}
    else{
        alert('2 > Ahh que pena... Já tentou aprender outras linguagens?');
    }