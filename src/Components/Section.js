import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from '@react-hook/window-size'




const Section = () => {

  const windowWidth = useWindowWidth()
 

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+2",
    TR: "+90",
    NL: "+15",
    IT: "+7"
  }


  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 ">

      {windowWidth >= 768 &&
        <Slider {...settings}>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" />
          </div>

        </Slider>}
      <div className='flex  items-center justify-between h-full md:w-10/12 md:container relative  md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 z-20' >

        <div className=" hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <h3 className='mt-8 text-4xl  font-semibold text-white'>Dakikalar içinde <br /> kapınızda</h3>
        </div>

        <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6 '>

          <h4 className='text-primary-brand-color font-semibold text-center mb-4'>Giriş yap veya kayıt ol</h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flags-select"
              />
              <label className="flex-1 relative group cursor-pointer">
                <input required className="peer h-14 rounded px-4 border-2 border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2 " type="text" />
                <span className=" peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs transition-all absolute top-0 left-0 h-full flex  px-4 items-center text-sm text-gray-500 ">Telefon Numarası</span>
              </label>
            </div>

            <button className="w-full h-12 flex items-center justify-center rounded  bg-yellow-brand-color text-primary-brand-color text-sm px-3 py-4 font-semibold hover:text-yellow-brand-color hover:bg-primary-brand-color transition-colors  " >Telefon numarası ile devam et</button>
            {/* <hr className="h-[1px] bg-gray-300 my-2" />
            <button className=" bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 w-full h-12 flex items-center justify-center rounded   text-sm px-3 py-4 font-semibold hover:bg-blue-700 hover:text-white transition-colors  " >Facebook ile devam et</button>*/}
          </div>

        </div>
      </div>



    </div >
  )
}

export default Section