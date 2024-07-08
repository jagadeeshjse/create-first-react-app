import React from 'react';

const ShowImage = (props) => {
  const { id, url, title } = props;
  return (
    <div className="data" id={id}>
      <img width={100} height={100} src={url} alt={title} />
      <h2>{title}</h2>
      <button>click more details</button>
    </div>
  );
};

export default ShowImage;
