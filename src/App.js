import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {

function sum(a, b){
  return a + b
}

  return (
    <div className="App">
      <h1>Testando o css</h1>
      <Frase />
      <SayMyName nome="Gabriel"/>
      <Pessoa 
          nome="Josevaldo"
          idade="20"
          profissao="programador"
          foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
