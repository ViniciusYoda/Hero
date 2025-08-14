export { };

const pessoa = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 35,
  funcao: 'Cloud Advocate'
};

console.log(pessoa);

function onboarding01(funcionario: { nome: string }) {
  return 'Seja bem-vinda ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Glaucia Lemos' }));

interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa: Pessoa) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.'
  );
}

console.log(onboarding02({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate' }));

type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
}

function onboarding03(pessoa: Pessoa03) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(onboarding03({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));

interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string;
}

function onboarding04(pessoa: Pessoa04) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(onboarding04({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));

interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}

function onboarding05(pessoa: Pessoa05) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.' +
    ' Seu e-mail será ' +
    pessoa.email
  );
}

console.log(onboarding05(
  {
    nome: 'Glaucia Lemos',
    funcao: 'Cloud Advocate',
    linguagem: 'JavaScript/Typescript',
    email: 'gllemos@microsoft.com'
  }
));

interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Filha extends Mae, Pai {
  idade: number;
}

const filha: Filha = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 35
}

console.log(filha);

interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animal = Cachorro & Gato;

type Usuario = {
  nome: string;
  email: string;
}

type Admin = {
  nome: string;
  email: string;
  admin: true;
}

const usuario: Usuario = {
  nome: 'Glaucia Lemos',
  email: 'algumacoisa@gmail.com'
}

const admin: Admin = {
  nome: 'Glaucia Lemos',
  email: 'algumacoisa@gmail.com',
  admin: true
}

function acessarSistema<T>(usuario: T): T {
  return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));