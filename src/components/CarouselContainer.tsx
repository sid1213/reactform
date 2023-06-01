import React from "react";
import img from "../images/background-img.png";
const CarouselContainer = () => {
  return (
    <div className="w-1/2 h-full">
      <div className="imgContainer ">
        <img src={img} alt="" className="w-full h-full cover" />
      </div>
    </div>
  );
};

export default CarouselContainer;
