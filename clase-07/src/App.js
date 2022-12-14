import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Video from './components/Video'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Button/>
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
        <Video/>
      </header>
    </div>
  );
}

export default App;
