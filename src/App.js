import React from "react";
import Projects from "./Components/Projects.js";
import About from "./Components/About.js";
import Home from "./Components/Home.js";
import "./App.css";
import Header from "./Components/Header.js"
import "bootstrap/dist/css/bootstrap.min.css";
import data from './data';
import Experience from "./Components/Experience.js";

function App() {
  return (
    <div className='App'>
    
    <Header></Header>
    <Home data={data}></Home>
    <About data={data}></About>
    <Experience data={data}></Experience>
    <Projects data={data}></Projects>
    

    </div>

    
  );
}

export default App;
