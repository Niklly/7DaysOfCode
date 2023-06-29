const nome = prompt("Digite o seu nome:");
const area = prompt(`Olá ${nome}, Seja bem vinda ao seu destino! Você quer seguir para a area de Front-End ou Back-End?`);


if (area == 'Front-End' || area == 'front-end' || area == 'front'){
    aprender = prompt("Você quer aprender React ou Vue?");
}

else if (area == 'Back-End' || area == 'back-end' || area == 'back') {
    aprender = prompt("Você quer aprender C# ou Java?");
}

else{
    alert('Você não inseriu uma opção válida.')
}

const futuro = prompt(`Você gostaria de seguir se especializando na area de ${area}? Então digite 1. Se preferir se desenvolver para se tornar FullStack? Digite 2.`);

if (futuro == 1){
    alert(`Boa escolha ${nome}! Se especializar em ${area} irá te abrir muitas portas. Além de te tornar mais experiente.`);
}

else if (futuro == 2){
    alert(`Ótima escolha ${nome}! Se tornar um fullstack tem sido muito requisitado pelas empresas. Você irá longe.`);
    }
else{
    alert('Você não inseriu uma opção válida.')
}

const saber = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite ok se a resposta for sim.');

while(saber === "ok"){
    const  tecnologia = prompt('Qual tecnologia gostaria de aprender?');
    alert(`Nossa!! ${tecnologia} é linguagem bem legal.`);
    saber = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite ok se a resposta for sim.');
}





//1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

//2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

//3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

//4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

//O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

//Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.