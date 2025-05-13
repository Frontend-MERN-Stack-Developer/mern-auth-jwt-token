import React from "react";
import BannerImage from "../../public/banner-img.png";

const Banner = () => {
  return (
    <div className="h-[90vh]">
      <img className="w-full h-[90vh]" src={BannerImage} />
    </div>
  );
};

export default Banner;
