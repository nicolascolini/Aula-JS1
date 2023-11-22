function jogo() {

    var nome = prompt("Qual seu nome");
    alert("Bem-vindo ao jogo" + nome);
    
    var usuarioEscolha = prompt("Escolha: pedra, papel ou tesoura?").toLowerCase();
  
    if (usuarioEscolha === "pedra" || usuarioEscolha === "papel" || usuarioEscolha === "tesoura") {
      
      var opcoes = ["pedra", "papel", "tesoura"];
      var computadorEscolha = opcoes[Math.floor(Math.random() * 3)];
  
      console.log("O computador escolheu: " + computadorEscolha);
  
      if (usuarioEscolha === computadorEscolha) {
        alert("Empate!");
      } else if (
        (usuarioEscolha === "pedra" && computadorEscolha === "tesoura") ||
        (usuarioEscolha === "papel" && computadorEscolha === "pedra") ||
        (usuarioEscolha === "tesoura" && computadorEscolha === "papel")
      ) {
        alert("Você ganhou!");
      } else {
        alert("Você perdeu!");
      }
    } else {
      alert("Escolha inválida. Por favor, escolha pedra, papel ou tesoura.");
    }
  }
  
  jogo();