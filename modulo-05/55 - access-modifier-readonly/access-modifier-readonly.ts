export { };

class Funcionario {
  readonly dataNascimento: Date;

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

const funcionario = new Funcionario(new Date(1986, 10, 24));

class Funcionario_01 {
  constructor(readonly dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

class Funcionario_03 {
  nome: string;
  readonly codigoFuncionario: number;

  constructor(nome: string, codigo: number) {
    this.codigoFuncionario = codigo;
    this.nome = nome;
  }
}

const func = new Funcionario_03('Glaucia', 112233);
func.nome = 'Glaucia Lemos';

interface IFuncionario {
  codigoFuncionario: number;
  nomeEmpregado: string;
}

const funcionario_01: Readonly<IFuncionario> = {
  codigoFuncionario: 506699,
  nomeEmpregado: 'Jurema',
};

const funcionario_02: IFuncionario = {
  codigoFuncionario: 506699,
  nomeEmpregado: 'Jurema',
};

funcionario_02.codigoFuncionario = 887653;
funcionario_02.nomeEmpregado = 'Lemos';
