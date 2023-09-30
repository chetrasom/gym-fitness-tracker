import BreadCrumb from '../components/breadcrumb/BreadCrumb';
import { MdMail, MdLocationPin, MdPhoneAndroid } from 'react-icons/md';

const ContactPage = () => {
    return (
        <>
            <BreadCrumb title="contact us" />

            <section className='bg-bl4'>
                <div className="container">
                    <div className='flex flex-col items-start gap-5 lg:flex-row mb-20'>
                        {/* Get in touch - left */}
                        <div className='flex-1'>
                            <div>
                                <span className="text-primary font-medium tracking-widest uppercase">CONTACT US</span>
                                <h3 className="text-white text-4xl mt-2 mb-10">GET IN TOUCH</h3>
                            </div>
                            <div className='text-customGray'>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-16 p-1">
                                        <div className="bg-bl3 w-14 h-14 rounded-full text-2xl flex items-center justify-center">
                                            <span className='text-primary'><MdLocationPin /></span>
                                        </div>
                                    </div>
                                    <p className='text-[15px]'>#295, st.182.Toul Kok, Phnom Penh, Cambodia</p>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-16 p-1">
                                        <div className="bg-bl3 w-14 h-14 rounded-full text-2xl flex items-center justify-center">
                                            <span className='text-primary'><MdPhoneAndroid /></span>
                                        </div>
                                    </div>
                                    <p className='text-[15px]'>+855 010 888 899, 012 888 899</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-16 p-1">
                                        <div className="bg-bl3 w-14 h-14 rounded-full text-2xl flex items-center justify-center">
                                            <span className='text-primary'><MdMail /></span>
                                        </div>
                                    </div>
                                    <p className='text-[15px]'>Support.gymcenter@gmail.com</p>
                                </div>

                            </div>
                        </div>

                        {/* Form */}
                        <div className='flex-1'>
                            <form className='space-y-4'>
                                <input 
                                    type="text" name="name" id="name" placeholder='Name' autoComplete='off'
                                    className='w-full h-12 pl-4 border-2 border-bl2 rounded-sm text-[15px] focus:outline-none bg-transparent text-customGray'
                                />
                                <input 
                                    type="email" name="email" id="email" placeholder='Email' autoComplete='off'
                                    className='w-full h-12 pl-4 border-2 border-bl2 rounded-sm text-[15px] focus:outline-none bg-transparent text-customGray'
                                />
                                <input 
                                    type="text" name="website" id="website" placeholder='Website'
                                    className='w-full h-12 pl-4 border-2 border-bl2 rounded-sm text-[15px] focus:outline-none bg-transparent text-customGray'
                                />
                                <textarea 
                                    name="comment" id="comment" cols="30" rows="5" placeholder='Comment'
                                    className='w-full p-4 border-2 border-bl2 rounded-sm text-[15px] focus:outline-none bg-transparent text-customGray'
                                />
                                <button type='submit' className='bg-primary w-full py-3 rounded-sm text-[15px] font-medium text-white tracking-wider uppercase'>
                                    submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* google map */}
                    <div className='h-[500px] rounded-sm'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7818.051766014735!2d104.93430896470277!3d11.550000966021353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310956d330da8527%3A0x7eff3ca8d12ecc0f!2sKoh%20Pich!5e0!3m2!1sen!2skh!4v1686193782078!5m2!1sen!2skh" 
                        //width="600" 
                        //height="450" 
                        //style="border:0;" 
                        //allowfullscreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className='w-full h-full'
                    >
                    </iframe>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactPage
