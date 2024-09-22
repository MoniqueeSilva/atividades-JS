// Função para converter uma string em um array de palavras
function toArray(string) { // Função nomeada como toArray e recebeu (str) como parâmetro.
    return string.trim().split(' '); // O retorno vai remover os espaços em branco do início e do fim da String utilizando o trim(), o split(' ') vai dividir a String em um array de palavras usando um espaço como separador.
  }
  
  // Exemplo do que sera verificado ao chamar a função toArray
  console.log(toArray("Round Robin")); // A String foi dividida e transformada em um array de palavras ["Round", "Robin"]
  
  