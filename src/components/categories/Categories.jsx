import { useGlobalExercise } from "../../context/exercises_context";
import { FaHeartbeat } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../customSlide.css";

// import required modules
import { Navigation } from "swiper";

const Categories = () => {
    const { bodyParts, activeBodyPart, setActiveBodyPart } = useGlobalExercise();

    return (
        <section className="bg-bl4 pt-0">
            <div className="container">
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
                    navigation={true}
                    modules={[Navigation]}
                    className="arrowSlider"
                >
                    {bodyParts.map((item, index) => {
                        return (
                            <SwiperSlide 
                                key={index}
                                className={`${activeBodyPart === item ? 'bg-white text-bl2':'bg-bl2 text-white'} group`}
                                onClick={() => {
                                    setActiveBodyPart(item)
                                    //window.scrollTo({ top: 1800, left:100, behavior: 'smooth' })
                                }}
                            >
                                <div 
                                    className="text-center rounded-sm group-hover:bg-white transition-all ease-in-out duration-300 py-4"
                                >
                                    <div className="bg-bl2 w-20 h-20 rounded-full flex items-center justify-center mx-auto
                                    group-hover:bg-primary">
                                        <span className="text-4xl text-primary group-hover:text-white">
                                            <FaHeartbeat />
                                        </span>
                                    </div>
                                    <h3 className='text-xl capitalize py-4 group-hover:text-bl2'
                                    >
                                        {item}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Categories
