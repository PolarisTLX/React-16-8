import React, { Component } from 'react'

class BootstrapButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Click Me"
    }
  }

  state = {
    date: new Date()
  };

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      message: "Clicked"
    })
  }

  render() {
    return (
      <div className="App">
        <h5>{this.state.counter}</h5>
        <button 
          onClick={this.onClick} 
          className="btn btn-warning"
        >
          {this.state.message}
        </button>
        <br/>
        <Logger countProp={this.state.counter} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}


export default BootstrapButton;

// extra component, not to be exported, but to be used in the existing component above:
class Logger extends Component {

  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps() is triggered");
    // this shows that it gets triggered everytime props (<Logger time={...) is changed
    console.log("New Props that were received:", newProps);    
  }

  render() {
    // return ( 
    //   <div>Logger Component</div>
    // );
    return this.props.countProp;
  }
}