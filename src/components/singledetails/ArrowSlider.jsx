import ExerciseCard from "../exercises/ExerciseCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../customSlide.css";

// import required modules
import { Navigation } from "swiper";

const ArrowSlider = ({ data }) => {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={32}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                },
                // 1024: {
                //     slidesPerView: 4,
                // },
            }}
            navigation={true}
            modules={[Navigation]}
            className="arrowSlider"
        >
            {data?.slice(0, 10).map((exercise, index) => {
                return (
                    <SwiperSlide key={index} className="lg:min-h-[430px] border border-[#464646] bg-bl1 rounded-sm">
                        <ExerciseCard key={index} {...exercise} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ArrowSlider
