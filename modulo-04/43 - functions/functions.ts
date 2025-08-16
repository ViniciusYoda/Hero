export {};

function somarNumeros(num1: number, num2: number): number {
  return num1 + num2;
}

const resultado = somarNumeros(2, 2);
console.log(resultado);

const saudar = function (mensagem: string) {
  return mensagem;
};

console.log(saudar('Olá, Developers!'));

const saudar_03 = (mensagem: string) => {
  return mensagem;
};

console.log(saudar_03('Fala, Pessoal!'));

const saudar_04 = new Function('mensagem', 'return "Fala " + mensagem');

console.log(saudar_04('Galera!'));
