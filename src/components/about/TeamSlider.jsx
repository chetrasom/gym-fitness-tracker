import { aboutSlider } from "../../utils/staticData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../customSlide.css";

import TeamCard from "./TeamCard";

const TeamSlider = () => {
    return (
        <section className="bg-bl4 pt-0">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-primary font-medium tracking-widest uppercase">our team</span>
                        <h3 className="text-white text-3xl mt-2 mb-10">TRAIN WITH EXPERTS</h3>
                    </div>
                    <button 
                        type="button"
                        className="border-2 border-primary rounded-sm p-3 px-4 text-white text-lg capitalize hover:bg-primary 
                        transition-all ease-in-out duration-150"
                    >
                        appointment
                    </button>
                </div>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={32}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {aboutSlider.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <TeamCard item={item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default TeamSlider
