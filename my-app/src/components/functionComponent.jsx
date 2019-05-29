import React from 'react';

const Box = (props) => {
  return (
    <div>

      <br/><span>{props.me}</span><br/><br/>

      <div className="d-flex flex-row p-4">
          { Element(1) }
          { Element(2) }
          { Element(3) }
      </div>

    </div>
  );
}

let Element = (value) => {
  return (
    <span className="border p-3 m-2 bg-light">Element {value}</span>
  );
}

export default Box;