import React from 'react';

const MyHotel = (props) => {
  console.log(props.myHotelData);
  return (
    <div>
      <img src={props.myHotelData.imgUrl} alt="" />
      <h4>{props.myHotelData.hotelName}</h4>
    </div>
  );
};

export default MyHotel;
