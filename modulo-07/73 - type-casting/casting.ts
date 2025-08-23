export { };

const nome: unknown = 'Glaucia Lemos';
console.log((nome as string).toLowerCase());

const carro = 'Corolla';

const tamanhoString: number = (<string>carro).length;

console.log('O tamanho da string é...: ', tamanhoString);
