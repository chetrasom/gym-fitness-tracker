import Loading from "../loading/Loading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../customSlide.css";


const ExerciseVideo = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) {
        return (
            <section className="bg-bl4">
                <div className="container">
                    <Loading />
                </div>
            </section>
        )
    }

    return (
        <section className="bg-bl4 pt-[40px]">
            <div className="container">

                <div className='text-left space-y-4 mb-16'>
                    <h3 className='text-white capitalize text-3xl lg:text-4xl'>
                        watch {" "}
                        <span className="text-primary">{name}</span>
                        {" "}
                        Exercise videos
                    </h3>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {exerciseVideos?.slice(0, 5).map((item, index) => {
                        const { video } = item;

                        return (
                            <SwiperSlide key={index} className="h-auto md:h-[320px]">
                                <a 
                                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="bg-bl1 h-full rounded-sm overflow-hidden">
                                        <figure className="h-[200px]">
                                            <img 
                                                src={video?.thumbnails[0].url} 
                                                alt={video?.title}
                                                className="w-full h-full object-cover" 
                                            />
                                        </figure>
                                        <div className="text-white text-left p-4">
                                            <h3 className="capitalize text-lg md:text-2xl mb-2">{video.title}</h3>
                                            <p className="text-[15px] capitalize text-primary">{video.channelName}</p>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
        </section>
    )
}

export default ExerciseVideo
