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

  componentWillUpdate(newProps, newState) {
    console.log("componentWillUpdate() is called before the render() method");
    console.log("NewProps of Button:", newProps); //this will be "null" as no props are chanigng
    console.log("NewState of Button:", newState);     
  }

  componentDidUpdate(prevProps, prevState){
    console.log("ComponentDidUpdate() is called after the render() method");
    console.log("prevProps:", prevProps); //this will be "null" as no props are chanigng   
    console.log("prevState:", prevState);        
  }

  componentWillUnmount() {
    console.log("componentWillUnMount() triggered");    
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

  shouldComponentUpdate(newProps, newState){
    console.log("shouldComponentUpdate() is triggered");   
    // console.log("New Props", newProps);     // this prints the countProp
    // console.log("New State", newState);     // this print "null"
    // return false; // when false, this still triggers, but the countProp does not change/get updated
    return true; // when true, this triggers, AND the countProp changes/gets updated
  }

  render() {
    // return ( 
    //   <div>Logger Component</div>
    // );
    return this.props.countProp;
  }
}