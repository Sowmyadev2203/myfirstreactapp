import logo from './logo.svg';
import './App.css';
import FuncLifeCycle from './uiContent/lifecycle/function';
import HomeComponent from './Home/homeComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <h1>{"hello"}</h1>
      <p>{2+2}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <FuncLifeCycle/>
     
    </div>
  );
}

export default App;
