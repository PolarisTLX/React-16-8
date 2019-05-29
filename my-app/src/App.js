import React from 'react';
import logo from './logo.svg';
import './App.css';
import FruitList from './components/fruitList';
import Timer from './components/Timer';
import BootstrapButton from './components/BootstrapButton';
import Box from "./components/functionComponent";
import LifeCycle from "./components/lifeCycle";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FruitList fruits={["Mango", "Banana", "Pineapple"]}/>
      <Timer/> 
      <BootstrapButton/>
      <Box me="words being passed"/>
      <LifeCycle/>
    </div>
  );
}

export default App;
