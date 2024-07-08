import React, { useEffect, useState } from 'react';
import ShowImage from './ShowImage';

const URL = 'https://jsonplaceholder.typicode.com/photos';

const ShowImageData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('newtwork Error');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="imgData">
      {data.map((eachItem) => {
        const { id, url, title } = eachItem;
        return <ShowImage id={id} url={url} title={title} />;
      })}
    </div>
  );
};

export default ShowImageData;
