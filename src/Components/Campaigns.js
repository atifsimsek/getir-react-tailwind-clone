import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannersData from "../api/banners.json"
import Title from "../Components/ui/Title"
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIos } from "react-icons/md"


function NextBtn({onClick }) {
    return (
        <button className="text-brand-color absolute top-1/2 -right-6 -translate-y-1/2" onClick={onClick}>
            <MdArrowForwardIos size={22}/>
        </button>


    );
}

function PrevBtn({ onClick }) {
    return (
        <button className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}>
            <MdArrowBackIos size={22} />
        </button>
    );
}







const Campaigns = () => {

    const [banners, setBanners] = useState([]);

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />
    };

    useEffect(() => {
        setBanners(bannersData)
    }, [])


    return (
        <div className=' mt-8 container mx-auto w-10/12 '>
            <Title title="Kampanyalar" />

            <Slider className='-mx-2' {...settings}>
                {banners.length && banners.map((banner) => (
                    <div key={banner.id}>
                        <picture className='block px-2'>
                            <img className='rounded-lg ' src={banner.image} alt="" />
                        </picture>
                    </div>
                ))}

            </Slider>

        </div>
    )
}

export default Campaigns