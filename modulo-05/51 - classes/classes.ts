export {};

class Pessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa(`Vinicius`, `Yoda`);
console.log(pessoa.nomeCompleto());

class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;
}

const estudante = new Estudante();

estudante.codigoEstudante = 8967;
estudante.nomeEstudante = 'Prince';

console.log('Código do Estudante...: ' + estudante.codigoEstudante);
console.log('Nome do Estudante...: ' + estudante.nomeEstudante);

class Estudante_1 {
  codigoEstudante: number;
  nomeEstudante: string;

  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }

  listarEstudante(): void {
    console.log('Código do Estudante...: ' + this.codigoEstudante);
    console.log('Nome do Estudante...: ' + this.nomeEstudante);
  }
}

const estudante_1 = new Estudante_1(9845, 'Prince Lemos');
console.log(
  'Lendo o atributo Código do Estudante...: ' + estudante_1.codigoEstudante,
);
console.log(
  'Lendo o atributo Nome do Estudante...: ' + estudante_1.nomeEstudante,
);
