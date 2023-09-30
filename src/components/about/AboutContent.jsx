const test = 'https://codewithsadee.github.io/fitlife/assets/images/about-banner.png';
import { BsFillClipboardCheckFill } from 'react-icons/bs';

const AboutContent = () => {
    return (
        <section className='bg-bl4'>
            <div className="container">
                <div className="flex flex-col items-center gap-10 lg:flex-row">
                    <div className="flex-1">
                        <figure className="bg-orange-400 rounded-md">
                            <img src={test} alt="about-image" />
                        </figure>
                    </div>
                    <div className="flex-1 text-white">
                        <span className="text-primary font-medium tracking-widest uppercase">about us</span>
                        <h2 className="text-white text-3xl lg:text-5xl mt-2 mb-10">Welcome To Our Fitness Gym</h2>
                        <p className="text-customGray mb-4">
                        <strong className="tracking-wider">Gym Fitness Tracker</strong>. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.
                        </p>
                        <p className="text-customGray mb-10">
                            Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <h4 className='flex items-center gap-x-4 capitalize font-medium mb-3'>
                                    <span className='text-primary text-2xl'><BsFillClipboardCheckFill /></span>
                                    body and mind
                                </h4>
                                <p className='text-[15px] text-customGray'>
                                    Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
                                </p>
                            </div>

                            <div>
                                <h4 className='flex items-center gap-x-4 capitalize font-medium mb-3'>
                                    <span className='text-primary text-2xl'><BsFillClipboardCheckFill /></span>
                                    healthy life
                                </h4>
                                <p className='text-[15px] text-customGray'>
                                    Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
                                </p>
                            </div>

                            <div>
                                <h4 className='flex items-center gap-x-4 capitalize font-medium mb-3'>
                                    <span className='text-primary text-2xl'><BsFillClipboardCheckFill /></span>
                                    strategies
                                </h4>
                                <p className='text-[15px] text-customGray'>
                                    Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
                                </p>
                            </div>
                            
                            <div>
                                <h4 className='flex items-center gap-x-4 capitalize font-medium mb-3'>
                                    <span className='text-primary text-2xl'><BsFillClipboardCheckFill /></span>
                                    workout
                                </h4>
                                <p className='text-[15px] text-customGray'>
                                    Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContent
