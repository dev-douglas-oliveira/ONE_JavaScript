console.log(`Trabalhando com listas`);
//ctrl + k + c para comentar diversas linhas ao mesmo tempo
//ctrl + k + u retirar todos os comentario de diversas linhas ao mesmo tempo

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`);

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
