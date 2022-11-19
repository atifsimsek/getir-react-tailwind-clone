import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from '@react-hook/window-size'
import { Formik } from 'formik';
import * as yup from 'yup';
import { RiErrorWarningLine } from "react-icons/ri"





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
          <Formik
            initialValues={{
              phone: ""
            }}
            validationSchema={
              yup.object({
                phone: yup.string().required("Lütfen telefon numaranızı giriniz.")
              })
            }
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              handleBlur,
              touched,
            }) => (
              <form noValidate onSubmit={handleSubmit} >

                <div className="grid gap-y-3 w-full">
                  <div className="flex gap-x-2">
                    <ReactFlagsSelect
                      countries={Object.keys(phones)}
                      customLabels={phones}
                      onSelect={code => setSelected(code)}
                      selected={selected}
                      className="flags-select"
                    />
                    <label htmlFor='phone' className="flex-1 relative group cursor-pointer">
                      <input
                        id='phone'
                        type="text"
                        required
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`peer h-14 rounded px-3.5 border-2 ${errors.phone && touched.phone && "!border-red-600 !group-hover:border-red-600 !focus:border-red-600 !hover:border-red-600 "}  border-gray-200 w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2 `} />
                      {errors.phone && touched.phone ? (
                        <RiErrorWarningLine size={26} className='text-red-600 absolute top-3.5 right-4' />
                      ) : null}
                      <span className="absolute text-gray-500 inset-[18px] text-sm  peer-focus:text-primary-brand-color  peer-focus:text-xs peer-focus:inset-[6px] peer-focus:ml-2.5  transform transition-all peer-valid:text-primary-brand-color  peer-valid:text-xs peer-valid:inset-[6px] peer-valid:ml-2.5 ">Telefon Numarası</span>
                    </label>
                  </div>
                  {errors.phone && touched.phone && (
                    <div className="flex">
                      <p className="w-[115px]"></p>
                      <p className='text-red-600 flex -mt-1  h-[15px] text-xs  items-center '>
                        {errors.phone}
                      </p>
                    </div>
                  )}
                  <button type="submit" className="w-full h-12 flex items-center justify-center rounded-lg  bg-yellow-brand-color text-primary-brand-color text-sm px-3 py-4 font-semibold hover:text-yellow-brand-color hover:bg-primary-brand-color transition-colors  " >Telefon numarası ile devam et</button>
                  {/* <hr className="h-[1px] bg-gray-300 my-2" />
                    <button className=" bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 w-full h-12 flex items-center justify-center rounded   text-sm px-3 py-4 font-semibold hover:bg-blue-700 hover:text-white transition-colors  " >Facebook ile devam et</button>*/}
                </div>
              </form>
            )}

          </Formik>

        </div>
      </div>



    </div >
  )
}

export default Section