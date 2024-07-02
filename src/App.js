import React from 'react';
// import ParentComponent from './ParentComponent';
import Counter from './Counter';
// import Hotel from './Hotel';
// import photosData from './PhotosData';
// import Photos from './Photos';

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
      <Counter />
    </div>
  );
};

export default App;
