import React, { useState } from 'react';

const DisplayData = () => {
  const [displayData, setDisplayData] = useState(false);

  const handleClick = () => {
    setDisplayData(!displayData);
  };

  //   if(true) {
  //     return 'data';
  //   } else{
  //     return 'data'
  //   }

  // // ternary operator

  // condtion ? 'true' : 'false';

  return (
    <center>
      <div>
        <button onClick={handleClick}>{displayData ? 'hide' : 'show'}</button>
        {displayData ? (
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dolorem earum veritatis dolor inventore est suscipit voluptatem
            perferendis deserunt quaerat quo enim ipsum officiis rerum soluta,
            ut ex. Esse cupiditate cum veniam inventore? Ullam labore maxime
            placeat voluptatem, iusto enim?
          </div>
        ) : (
          <h1>Data is hidden! click the button</h1>
        )}
      </div>
    </center>
  );
};

export default DisplayData;
