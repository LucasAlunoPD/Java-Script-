// Função arrow
const soma = (a, b) => a + b;
const subtrai = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const divide = (a, b) => a / b;

// Função que mostra os resultados
const mostraResultado = (num1, num2) => {
  console.log(`soma entre ${num1} e ${num2}:`, soma(num1, num2));
  console.log(`subtração entre ${num1} e ${num2}:`, subtrai(num1, num2));
  console.log(`multiplicação entre ${num1} e ${num2}:`, multiplica(num1, num2));
  console.log(`divisão entre ${num1} e ${num2}:`, divide(num1, num2));
};

mostraResultado(20, 10);
