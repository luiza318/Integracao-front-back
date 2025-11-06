const mensagem = [
      "Acredite em você mesmo!",
      "Você é mais forte do que pensa.",
      "Nunca desista dos seus sonhos.",
      "Hoje é um ótimo dia para começar algo novo.",
      "Sorria, o universo está do seu lado!",
      "Pequenos passos levam a grandes conquistas."
]
  function mensagemAleatoria() {
      const indice = Math.floor(Math.random() * mensagem.length);
      return mensagem[indice];
    }


  function dataHoraFormatadaLocal() {
  const agora = new Date();

  const opcoesHora = { 
    hour12: false,
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };

  const parteData = agora.toLocaleDateString('pt-BR');
  const parteHora = agora.toLocaleTimeString('pt-BR', opcoesHora);

  return `${parteData} ${parteHora}`;
}

module.exports = { mensagemAleatoria, dataHoraFormatadaLocal };
