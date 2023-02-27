console.log("Trabalhdo com atribuição de variáveis");
const idade = 35;
const primeiroNome = "Douglas";
const sobrenome = "Oliveira";

console.log(primeiroNome + " " + sobrenome); // mesmo resultado de baixo
console.log(primeiroNome, sobrenome); // outra maneira de trabalhar com texto
console.log(`Meu primeiroNome é ${primeiroNome}`); //maneira correta com crases duplas, assim é mais fácil de trabalhar com variáveis, sem a necessidade de ficar concatenando
console.log("Meu primeiroNome é ${primeiroNome}"); //maneira errada com aspas duplas
console.log(`Meu primeiroNome é ${primeiroNome} ${sobrenome}`);
