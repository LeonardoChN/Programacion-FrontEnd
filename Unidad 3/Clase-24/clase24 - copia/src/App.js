import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p> Hola</p>
    </>
    // se borro un div y se puso el P  Y Da error
    // para evitar el error se  se coloca un <> al comienzo 
    // de todo para englobar las 2 etiquetas y no de error 
  );
}

export default App;
