let pecaXadrez = "cavalo";

switch (pecaXadrez.toLowerCase()) {
  case "bispo":
    console.log("Bispo -> Move-se na diagonal, quantas casas quiser.");
    break;

  case "cavalo":
    console.log("Cavalo -> 'L' pode pular sobre as peças.");
    break;
  
  case "peão":
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;

  case "rainha":
    console.log("Rainha-> Diagonal, horizontal e vertical.");
    break;
  
  case "rei":
    console.log("Rei -> Pode mover-se em qualquer direção, uma casa por vez.");
    break;
  
  case "torre":
    console.log("Torre -> Horizontal e vertical.");
    break;
  
  default:
    console.log('Erro, peça inválida!');
    break;
};