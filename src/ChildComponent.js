import React from 'react';

const ChildComponent = (props) => {
  console.log(props);
  return (
    <div>
      <div>Name:{props.sendName} </div>
      <div>Age:{props.sendAge}</div>
    </div>
  );
};

export default ChildComponent;
