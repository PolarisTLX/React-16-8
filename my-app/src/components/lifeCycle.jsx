import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends Component {

  componentWillMount() {
    console.log("Executed before the component is mounted...!");
    console.log(ReactDOM.findDOMNode(this));  
    // this will appear as "null", as the component does not exist yet      
  }
  
  componentDidMount() {
    console.log("Executed after the component is mounted...!");    
    console.log(ReactDOM.findDOMNode(this)); 
    // this will appear as the div element in the return statement 
  }

  render() {
    return(
      <div className="App">
        <h1>"LifeCycle" Component Mounted</h1>
      </div>
    );
  }  
}

export default LifeCycle;
