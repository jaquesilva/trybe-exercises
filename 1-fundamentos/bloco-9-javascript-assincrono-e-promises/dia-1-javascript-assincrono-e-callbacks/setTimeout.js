setTimeout(() => {
  console.log("Hello World");
}, 3000);

// se tivesse códigos aqui em baixo, continuariam sendo executados.

// ===================

// Outro exemplo da função setTimeout

const sleep = sleepDuration => {
  const now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration);
}

const fun1 = () => {
  sleep(5000); // essa função para todo o programa, só executa os demais, após 5 segundos, como resolver? R = Essa função deveria ser ASSÍNCRONA, resolve com a função setTimeout()
  console.log('Função 1');
}

const fun2 = () => {
  console.log('Função 2');
}

console.log('Antes de chamar as funções'); // É exibido primeiro esse console, após 5 segundos, definidos dentro da função fun1, as funções e o console baixo são executados.

fun1();
fun2();

console.log('Depois de chamar as funções');

// ====================

// Usando a função setTimeout

// Todo esse código é a THREAD PRINCIPAL/MAIN THREAD
const sleep = sleepDuration => {
  const now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration);
}

const fun1 = () => {
  setTimeout(() => { // Essa função vai para uma THREAD PARALELA, até ser executada, após sua execução, volta pra THREAD PRINCIPAL
    console.log('Função 1');
  }, 5000) 
  
}

const fun2 = () => {
  console.log('Função 2');
}

console.log('Antes de chamar as funções');

fun1();
fun2();

console.log('Depois de chamar as funções');

// Nesse exemplo, qual será a ordem de execução?
// console.log('Antes de chamar as funções');
// fun2();
// console.log('Depois de chamar as funções');
// Depois de 5 segundos, executará:
// fun1();

// Obs: A página web não ficará travada esperando a execução da fun1 (que ficará em onroad), enquanto isso, a outra função e os consoles são executados.

//No ASSINCRONISMO, sempre trabalharemos com callbacks

 // ====================

// Executando uma função dentro de outra função:

const sleep = sleepDuration => {
  const now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration);
}

const fun1 = (func) => { // Como o JS entende que o parâmetro "func" é a fun2 ?
  setTimeout(() => { 
    console.log('Função 1');
    func()
  }, 5000);
}

const fun2 = () => {
  console.log('Função 2');
}

console.log('Antes de chamar as funções');

fun1(fun2);

console.log('Depois de chamar as funções');