import { heroSlider } from '../../utils/staticData';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../customSlide.css";

// import required modules
import { Navigation, Autoplay } from "swiper";


const Hero = () => {
    return (
        <div className='w-full h-[600px] z-50 lg:h-screen'>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={true}
                className='heroSlider relative'
            >
                {heroSlider.map((slide) => {
                    return (
                        <SwiperSlide 
                            key={slide.id}
                            style={{ backgroundImage: `url(${slide.imgUrl})` }}
                            className='bg-cover bg-center bg-no-repeat'
                        >
                            <div className='container h-full flex justify-center items-center lg:justify-end'>
                                <div className='max-w-lg text-white lg:text-left uppercase'>
                                    <span className='text-base'>Shape your body</span>
                                    <h1 className='text-5xl leading-snug font-bold py-10 lg:text-7xl lg:leading-[1.1] lg:pt-4'>
                                        Be <span className='text-primary'>strong</span> training hard
                                    </h1>
                                    <button type='button' className='bg-primary text-[15px] font-medium tracking-wider uppercase px-4 py-3 rounded-sm'>
                                        get info
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Hero
