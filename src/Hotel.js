import React from 'react';
import MyHotel from './MyHotel';

let data = {
  id: 1,
  imgUrl:
    'https://a0.muscache.com/im/pictures/1a8cdb14-aca7-45cc-a7c9-b79dd1ed6f3c.jpg?im_w=720',
  hotelName: 'Vill in Babakan',
  rating: 4.9,
  price: 25314,
};

const Hotel = () => {
  return (
    <div>
      <h1>My hotel details</h1>
      <MyHotel myHotelData={data} />
    </div>
  );
};

export default Hotel;
