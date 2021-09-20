// Exercises 1 and 2

import './App.css';

const tarefas = ['Acordar', 'Ajudar o Di', 'Passear com a Mel', 'Tomar café', 'Organizar a casa', 'Trabalhar', 'Estudar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    </div>
  );
}

export default App;
