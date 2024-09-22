// Função para gerar a citação de nomes de modo normal e compacto:
function citacaoNome(nomeCompleto, formato = 'normal') { // Função nomeada como citacaoNome, que recebeu dois parâmetros: nomeCompleto e formato
    // Separa o nome em um array de palavras
    const palavras = nomeCompleto.split(' ');
  
    // Inverte a ordem das palavras
    const palavrasInvertidas = palavras.reverse();
  
    // Cria a citação normal
    const citacaoNormal = palavrasInvertidas.join('; ');
  
    // Cria a citação compacta
    const citacaoCompacta = palavrasInvertidas.map(palavra => palavra[0] + '.').join(', ') + ', ' + palavrasInvertidas[0];
  
    // Retorna a citação de acordo com o formato
    if (formato === 'normal') {
      return citacaoNormal.toUpperCase();
    } else if (formato === 'compacto') {
      return citacaoCompacta.toUpperCase();
    } else {
      return 'Formato de citação inválido.';
    }
  }
  
  // Exemplos de uso:
  const nome = "João da Silva Melo";
  console.log(citarNome(nome));   // Saída: MELO; João da Silva
  console.log(citarNome(nome, 'compacto'));  // Saída: MELO, J. S.
  