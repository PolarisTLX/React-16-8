import React, { Component } from 'react';

// class FruitList extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello From FruitList Component</h1>
//         <ol>
//           { this.props.fruits.map(element => <li>{element}</li>)}
//         </ol>
//       </div>
//     );
//   }
// }


// converted to functional component:
const FruitList = props => {

  return (
    <div className="App">
      <h1>Hello From FruitList Component</h1>
      <ol>
        {props.fruits.map((element, index) => <li key={index}>{element}</li>)}
      </ol>
    </div>
  );
}

export default FruitList;