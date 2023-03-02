console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 18;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    listaDeDestinos.splice(1, 1); //removendo iten
    console.log(listaDeDestinos);
} else {
    console.log("Vc não pode comprar");
}
