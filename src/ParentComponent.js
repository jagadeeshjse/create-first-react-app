import React from 'react';
import ChildComponent from './ChildComponent';

const name = 'Jack will';
const age = 40;

const ParentComponent = () => {
  return (
    <div>
      ParentComponent
      <ChildComponent sendName={name} sendAge={age} />
    </div>
  );
};

export default ParentComponent;
