import React from 'react';
import ShowImageData from './ShowImageData';
import './App.css';
import MealCompoent from './MealCompoent';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
// import ParentComponent from './ParentComponent';
import Counter from './Counter';
import DisplayData from './DisplayData';
// import Hotel from './Hotel';
// import photosData from './PhotosData';
// import Photos from './Photos';
import Form from './Form';

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
      {/* <MealCompoent /> */}
      <div className="content">
        <h1>My components</h1>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal-comp" element={<MealCompoent />} />
            <Route path="/show-image" element={<ShowImageData />} />
            <Route path="/display-data" element={<DisplayData />} />
            <Route path="/form" element={<Form />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
