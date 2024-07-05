import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('im comming from useeffect');
  });

  // useEffect(() => {
  //   console.log('im comming from useeffect');
  // }, []);

  // useEffect(() => {
  //   console.log('im comming from useeffect');
  // }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
