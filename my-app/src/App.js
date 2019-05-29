import React from 'react';
import logo from './logo.svg';
import './App.css';
import FruitList from './components/fruitList';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FruitList fruits={["Mango", "Banana", "Pineapple"]}/>
      <Timer />
    </div>
  );
}

export default App;
