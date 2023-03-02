console.log("Trabalhando com loops");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 17;
const estaAcompanhado = false;
const destino = "São Paulo";

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino existe: ", destinoExiste);
if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
    listaDeDestinos.splice(contador, 1);
    console.log(listaDeDestinos);
} else {
    console.log("Desculpe, tivemos um erro!");
}

for (let i = 0; i < listaDeDestinos.length; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}
