function logError(errorMessage: string): void {
  console.log(errorMessage);
  // return errorMessage;
}

logError('Required field - Name!');

const logErrorExample2 = (errorMessage: string): void => {
  console.log(errorMessage);
};

logErrorExample2('Required field - Surname');

let variavelExemploVoid: void;
// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);
