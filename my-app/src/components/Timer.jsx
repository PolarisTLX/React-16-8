// import React, { Component } from 'react'

// class Timer extends Component {
//   state = {
//     date: new Date()
//   };
  
//   callMe() {
//     setInterval(() => {      
//       // this.props.date = new Date();  // properties are immutable
//       this.setState({ date: new Date()});
//     }, 1000);
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <h1>Current Time</h1>
//         <h2>It is { this.state.date.toLocaleTimeString() }</h2>
//         { this.callMe() }
//       </div>
//      );
//     }
//   }
  
// converted to functional component with useState
import React, { useState } from 'react'

const Timer = props => {

  const [date, setDate] = useState([]);

  const callMe = () => {
    setInterval(() => {
      let newDate = new Date().toLocaleTimeString();      
      setDate(newDate);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>Current Time</h1>
      <h2>It is {date}</h2>
      {callMe()}
    </div>
  )
}


export default Timer;