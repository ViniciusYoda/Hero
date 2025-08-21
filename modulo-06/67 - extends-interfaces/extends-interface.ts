exports = {};

interface Animal_01 {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro_01 extends Animal_01 {
  raca: string;
}

const cachorro: Cachorro_01 = {
  nome: 'Prince',
  idade: 2,
  porte: 'Médio',
  raca: 'Spiz Alemao',
};

console.log(cachorro);

interface Cachorro {
  nome: string;
}

interface Gato {
  nome: string;
}

interface Animal extends Cachorro, Gato {
  idade: number;
}

const animal: Animal = {
  nome: 'Farofa',
  idade: 5,
};

console.log(animal);

interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
  id: string;
  salario: string;
  linguageProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'js-123',
  nome: 'Glaucia Lemos',
  salario: '10k',
  linguageProgramacao: 'JavaScript',
}

console.log(desenvolvedor)


