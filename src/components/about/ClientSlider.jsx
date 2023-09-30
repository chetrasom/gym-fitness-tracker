import { testimonialSlider } from "../../utils/staticData";
import ClientCard from "./ClientCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../customSlide.css";

// import required modules
import { Navigation } from "swiper";

const ClientSlider = () => {
    return (
        <section className="bg-bl4">
            <div className="container">

                <div className='text-center space-y-4 mb-16'>
                    <span className='text-primary font-medium tracking-widest uppercase'>TESTIMONIAL</span>
                    <h3 className='text-white text-3xl'>OUR CILENT SAY</h3>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={32}
                    // breakpoints={{
                    //     768: {
                    //         slidesPerView: 3,
                    //     },
                    //     1024: {
                    //         slidesPerView: 4,
                    //     },
                    // }}
                    navigation={true}
                    modules={[Navigation]}
                    className="testimonialSlider"
                >
                    {testimonialSlider.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <ClientCard item={item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default ClientSlider
