import React from 'react';
// import ShowImageData from './ShowImageData';
import './App.css';
import MealCompoent from './MealCompoent';
// import ParentComponent from './ParentComponent';
// import Counter from './Counter';
// import DisplayData from './DisplayData';
// import Hotel from './Hotel';
// import photosData from './PhotosData';
// import Photos from './Photos';
// import Form from './Form';

const App = () => {
  return (
    <div>
      {/* {photosData.map((eachObj) => {
        const { id, thumbnailUrl, title, url } = eachObj;
        return (
          <Photos id={id} title={title} thumbnailUrl={thumbnailUrl} url={url} />
        );
      })} */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <DisplayData /> */}
      {/* <Form /> */}
      {/* <ShowImageData /> */}
      <MealCompoent />
    </div>
  );
};

export default App;
