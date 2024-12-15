import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainComp from './MainComp';
import reportWebVitals from './reportWebVitals';
import Sample from './Samplecomp';
import HomeComponent from './Home/homeComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './portfolio/header';
import About from './portfolio/about';
import Projects from './portfolio/projects';
import Contact from './portfolio/contact';
import LoginForm from './uiContent/loginComp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    <HomeComponent/>
    <div style={{height:"600px"}}><h1 style={{textAlign:"center"}}>Routing Task</h1>
    <App/></div>

    {/*Portfolio */}
    <div className="text-white bg-dark">
        <Head/>
        <About/>
        <Projects/>
        <Contact/>
        </div>

     

    
    {/* <Sample /> */}
    {/* <MainComp/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
