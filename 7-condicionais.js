console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 17;
const menorAcompanhado = false;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
} else if (menorAcompanhado == false) {
    console.log("Menor desacompanhado não pode comprar");
} else {
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
}
