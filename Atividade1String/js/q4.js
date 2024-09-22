// Função para extrair um número especificado de caracteres de uma String, partindo do início.

function initCut(string, numero) { // Função nomeada como initCut e recebeu dois parâmetros (string, numero)
    return string.substring(0, numero); // Retorna os primeiros caracteres da String, substring vai extrair uma parte da String onde o índice inicial é 0 e o índice final é numero, que equivale a numero -1 caractere.
  }
  
  // Exemplo do que sera verificado ao chamar a função initCut
  console.log(initCut("Round Robin", 4)); // A função initCut foi chamada passando a string "Round Robin" e o número 4 como argumentos, exibindo os 4 primeiros caracteres: "Roun".
  