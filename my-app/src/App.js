import React from 'react';
import logo from './logo.svg';
import './App.css';
import FruitList from './components/fruitList';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FruitList fruits={["Mango", "Banana", "Pineapple"]}/>
    </div>
  );
}

export default App;
