export { };

class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem() {
    return this.item;
  }

  setItem(item: T) {
    this.item = item;
  }
}

const boxString = new Box<string>('Glaucia Lemos');
const boxNumber = new Box<number>(36);

console.log(boxString.getItem()); // Saída: Glaucia Lemos
console.log(boxNumber.getItem());

class Estudante<T, U> {
  private id: T;
  private nome: U;

  setValor(id: T, nome: U): void {
    this.id = id;
    this.nome = nome;
  }

  retornarValor(): void {
    console.log(`Identificação do Estudante...: ${this.id}, Nome do Estudante...: ${this.nome}`);
  }
}

const estudante = new Estudante<number, string>();

estudante.setValor(101, "Glaucia Lemos");
estudante.retornarValor();

const estudanteSecundario = new Estudante<string, string>();

estudanteSecundario.setValor("201", "Jurema Lemos");
estudanteSecundario.retornarValor(); 
