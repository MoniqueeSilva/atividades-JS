// Função que verifica se a variável é ou não do tipo String.
function isString(valor) { //A função foi nomeada como isString e recebeu (valor) como parâmetro.
    return typeof valor === 'string'; //Foi utilizado o operador typeof para retornar o tipo de dado da variável
  }
  
// Exemplo do que sera verificado ao chamar a função isString
console.log(isString("Olá")); // Se "Olá" for uma String, imprime: true
console.log(isString([1, 2, 4, 0])); // Caso o array não seja do tipo String, imprime: false
  