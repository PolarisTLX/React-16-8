import React, { Component } from 'react';

class FruitList extends Component {
  // state = {}
  render() {
    return (
      <div className="App">
        <h1>Hello From FruitList Component</h1>
        <ol>
          { this.props.fruits.map(element => <li>{element}</li>)}
        </ol>
      </div>
    );
  }
}

export default FruitList;