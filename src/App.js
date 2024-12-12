import logo from './logo.svg';
import './App.css';
import HomeComponent from './Home/homeComp';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Sample from './Samplecomp';
import FuncLifeCycle from './uiContent/lifecycle';
import Todo from './uiContent/todolist';
import SimpleForm from './uiContent/formsub/formr';
import UpdatingSpinner from './uiContent/updating/updatingspinner';
import PageNotFound from './uiContent/child1/pagenotfound';


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
      <Router>
        <div style={{backgroundColor:"black",textDecoration:"none",padding:"15px"}}>
       <nav style={{display:"flex",justifyContent:"space-around",fontSize:"20px"}}>
        <Link to="/task1"  style={{textDecoration:"none",color:"white"}}>Task 1</Link>
        <Link to="/task2"  style={{textDecoration:"none",color:"white"}}>Task 2</Link>
        <Link to="/task3"  style={{textDecoration:"none",color:"white"}}>Task 3</Link>
        <Link to="/task4"  style={{textDecoration:"none",color:"white"}}>Task 4</Link>
        <Link to="/task5"  style={{textDecoration:"none",color:"white"}}>Task 5</Link>
        </nav> 

        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Routes>
          
          <Route path='/task1' element={<Sample/>}/>
          <Route path='/task2' element={<FuncLifeCycle/>}/>
          <Route path='/task3' element={<Todo/>}/>
          <Route path='/task4' element={<SimpleForm/>}/>
          <Route path='/task5' element={<UpdatingSpinner/>}/>
          <Route path='*'     element={<PageNotFound/>}/>
          
        </Routes> 
        </div> 


      </Router>
    
     
    </div>
  );
}

export default App;
