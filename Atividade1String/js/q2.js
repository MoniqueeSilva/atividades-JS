// Função que verifica se uma String está em branco, vazia ou não. 
function isEmpty(string) { // A função foi nomeada como isEmpty e recebeu (str) como parâmetro.
    return string === '';  // Retorno que verifica se a string str for igual a uma string vazia ('').
  }
  
// Exemplo do que sera verificado ao chamar a função isEmpty
console.log(isEmpty('')); // Se a String for vazia (''), imprime: true
console.log(isEmpty('abc')); // Se a String não for vazia ('abc') imprime: false
  