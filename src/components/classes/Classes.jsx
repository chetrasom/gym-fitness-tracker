import { Link } from 'react-router-dom';
import Service1 from '../../assets/images/classes/services-1.jpg';
import Service2 from '../../assets/images/classes/services-2.jpg';
import Service3 from '../../assets/images/classes/services-3.jpg';
import Service4 from '../../assets/images/classes/services-4.jpg';

const Classes = () => {
    return (
        <section className='bg-bl4'>
            <div className="container">

                <div className='text-center space-y-4 mb-16'>
                    <span className='text-primary font-medium tracking-widest uppercase'>WHAT WE DO?</span>
                    <h3 className='text-white text-3xl lg:text-4xl'>PUSH YOUR LIMITS FORWARD</h3>
                </div>

                <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-4 lg: gap-y-0'>

                    {/* card-01 */}
                    <div className='min-h-[250px] h-[300px] overflow-hidden'>
                        <img src={Service1} alt="image" className='w-full h-full object-top object-cover' />
                    </div>
                    <div className='bg-bl2 p-8 group hover:bg-bl1 transition-all ease-in-out duration-150'>
                        <h3 className='text-xl capitalize mb-3 group-hover:text-primary'>Personal training</h3>
                        <p className='text-customGray text-[15px] mb-10'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor ut dolore facilisis.
                        </p>
                        <Link 
                            to="classes" 
                            className='capitalize border-2 rounded-sm py-3 px-4 group-hover:border-primary'>
                            explore
                        </Link>
                    </div>

                    {/* card-02 */}
                    <div className='min-h-[250px] h-[300px] overflow-hidden'>
                        <img src={Service2} alt="image" className='w-full h-full object-top object-cover' />
                    </div>
                    <div className='bg-bl2 p-8 group hover:bg-bl1 transition-all ease-in-out duration-150'>
                        <h3 className='text-xl capitalize mb-3 group-hover:text-primary'>Group fitness classes</h3>
                        <p className='text-customGray text-[15px] mb-10'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor ut dolore facilisis.
                        </p>
                        <Link 
                            to="classes" 
                            className='capitalize border-2 rounded-sm py-3 px-4 group-hover:border-primary'>
                            explore
                        </Link>
                    </div>
                    
                    {/* card-03 */}
                    <div className='order-1 lg:order-none bg-bl2 p-8 group hover:bg-bl1 transition-all ease-in-out duration-150'>
                        <h3 className='text-xl capitalize mb-3 group-hover:text-primary'>Strength training</h3>
                        <p className='text-customGray text-[15px] mb-10'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor ut dolore facilisis.
                        </p>
                        <Link 
                            to="classes" 
                            className='capitalize border-2 rounded-sm py-3 px-4 group-hover:border-primary'>
                            explore
                        </Link>
                    </div>
                    <div className='min-h-[250px] h-[300px] overflow-hidden'>
                        <img src={Service3} alt="image" className='w-full h-full object-top object-cover' />
                    </div>
                    
                    {/* card-04 */}
                    <div className='bg-bl2 p-8 group hover:bg-bl1 transition-all ease-in-out duration-150'>
                        <h3 className='text-xl capitalize mb-3 group-hover:text-primary'>Body building</h3>
                        <p className='text-customGray text-[15px] mb-10'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor ut dolore facilisis.
                        </p>
                        <Link 
                            to="classes" 
                            className='capitalize border-2 rounded-sm py-3 px-4 group-hover:border-primary'>
                            explore
                        </Link>
                    </div>
                    <div className='min-h-[250px] h-[300px] overflow-hidden'>
                        <img src={Service4} alt="image" className='w-full h-full object-top object-cover' />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Classes
