// Função para converter uma string em formato abreviado.

function abbrevName(name) { // Função nomeada como abbrevName que recebe (name) como parâmetro
    
    const nameArray = name.split(' '); // Constante imutável para armazenar o resultado da divisão do nome, split vai dividir name em um array de palavras usando o espaço (' ') como separador

    if (nameArray.length > 1) { // Verifica se o nome completo possui mais de uma palavra/elemento

      return `${nameArray[0]} ${nameArray[1][0]}.`; // Vai retornar com um template String para construir a abreviação, acessando o primeiro elemento do array e o primeiro elemento da segunda palavra, abreviando, primeira palavra, seguida da inicial da segunda palavra com um ponto
    }
    
    return name; // Se houver apenas uma palavra, retorna a string original
  }
  
  // Exemplo do que sera verificado ao chamar a função abbrevName
  console.log(abbrevName("Robin Hood")); // A saída será: "Robin H."
  