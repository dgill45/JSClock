import Clock from './Clock';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <p className = 'App-intro'>
            Hi Donell!
        </p>
       <Clock />
      </header>
    </div>
  );
}

export default App;
