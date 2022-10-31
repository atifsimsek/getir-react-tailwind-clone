import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 ">

      <Slider {...settings}>
        <div>
          <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" />
        </div>

      </Slider>
      <div className='flex items-center justify-between h-full w-9/12 container absolute top-0 left-1/2 -translate-x-1/2 z-20' >

        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <h3 className='mt-8 text-4xl font-semibold text-white'>Dakikalar içinde <br /> kapınızda</h3>
        </div>

        <div></div>
      </div>



    </div>
  )
}

export default Section