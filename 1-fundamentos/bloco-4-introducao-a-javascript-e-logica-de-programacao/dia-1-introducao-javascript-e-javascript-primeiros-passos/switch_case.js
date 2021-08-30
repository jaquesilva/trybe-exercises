//switch -- case

let pessoaCandidata = "aprovada"; //para testar utilizar aprovada, lista ou reprovada

switch(pessoaCandidata) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;


  case "lista":
    console.log("Você está na nossa lista de espera");
    break;


  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

  default:
    console.log("Não se aplica");
  }
