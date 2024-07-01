import React from 'react';

const Photos = (props) => {
  const { title, url } = props;
  return (
    <div>
      <img width="250" height="250" src={url} alt={title} />
      <h3>{title}</h3>
      <button>click more details</button>
    </div>
  );
};

export default Photos;
