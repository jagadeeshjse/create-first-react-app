import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = (props) => {
  const { sendAge, sendName } = props;
  console.log(props);
  return (
    <div>
      <div>Name:{sendName} </div>
      <div>Age:{sendAge}</div>
    </div>
  );
};

ChildComponent.propTypes = {
  sendName: PropTypes.any,
  sendAge: PropTypes.any,
};

export default ChildComponent;
