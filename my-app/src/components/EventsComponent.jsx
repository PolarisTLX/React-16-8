import React, { Component } from 'react'

class EventsComponent extends Component {

  // if you plan on using the Handler() method more than once:
  constructor(props) {
    super(props);
    this.handleMe = this.Handler.bind(this);
  }

  Handler(event) {
    console.log(this, event.target);    
  }

  render() {
    return(
      <div className="App">
        <button 
          // onClick={(event) => {
          //   // console.log("Click Event triggerred"); 
          //   // console.log(event);                       
          //   console.log(event.type); 
          //   console.log(this);   // to grab the object                           
          // }}
          onMouseOver={(event) => {                  
            console.log(event.type);                       
          }}
          onMouseLeave={(event) => {                  
            console.log(event.type);                       
          }}
          // onClick={((event) => { 
          //   console.log(event.target);   // to grab the object 
          //   // alternative is a custome event handler, which is better approach
          // }).bind(this)}
          // onClick={this.Handler.bind(this)}
          // alternative with constructor binding (lines 5-8)
          onClick={this.handleMe}
          className="my-events-button btn btn-success"
        >
          Events Button
        </button>
      </div>
    );
  }
}

export default EventsComponent