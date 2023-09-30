import { Link } from "react-router-dom"
import Logo from "../logo/Logo"
import { socials, navigation, footerContact } from "../../utils/staticData"
import clockImg from '../../assets/icons/clock.png';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <section className="bg-bl py-[60px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-10">

                    <div>
                        <Logo />
                        <p className="text-[15px] text-customGray mt-6 mb-4">
                            <strong className="tracking-wider">Gym Fitness Tracker </strong>
                            Website is an online mode exercise website where anyone can learn all type of workout exercises.
                        </p>
                        <div className="flex gap-4">
                            <figure>
                                <img src={clockImg} alt="clock" className="w-[36px] h-[36px]" />
                            </figure>
                            <div className="text-customGray text-[15px]">
                                <div className="mb-2">
                                    <p className="font-semibold tracking-wider">Monday - Friday</p>
                                    <p>5:00 AM - 10:00 PM</p>
                                </div>
                                <div className="font-semibold tracking-wider">
                                    <p>Saturday - Sunday</p>
                                    <p>7:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl capitalize mb-8">Our Links</h3>
                        <ul className="capitalize text-customGray text-[15px] space-y-4">
                            {navigation.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <Link 
                                            to={link.path} 
                                            className="hover:text-primary hover:pl-1 ease-linear duration-150"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl capitalize mb-8">contact us</h3>
                        <div>
                            {footerContact.map((contact) => {
                                return (
                                    <div key={contact.id} className="flex items-center gap-2 mb-2">
                                        <div className="w-16 p-1">
                                            <div className="bg-primary w-[46px] h-[46px] rounded-full text-2xl flex items-center justify-center">
                                                <span>{contact.icon}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-y-1 w-full text-[15px] text-customGray">
                                            <a href="" className="hover:text-primary">{contact.text1}</a>
                                            <a href="" className="hover:text-primary">{contact.text2}</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl capitalize mb-8">our newsletter</h3>
                        <form action="" className="mb-6">
                            <input type="text" name="newsletter" id="newsletter" placeholder="Email Address"
                                className="text-[15px] text-bl h-[44px] pl-4 rounded-tl-sm rounded-bl-sm focus:outline-none"
                            />
                            <button type="button" className="bg-primary h-[44px] px-4 text-[15px] rounded-tr-sm rounded-br-sm">
                                Send
                            </button>
                        </form>

                        <ul className="flex gap-x-3">
                            {socials.map((social) => {
                                return (
                                    <li key={social.id} className="bg-bl2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary duration-150">
                                        <Link to={social.path} className="text-lg">
                                            {social.icon}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>

                <div className="text-gray-400 tracking-wide mt-16">
                    <div className="flex items-center justify-center gap-x-4">
                        <div>
                            Created By <span className="text-primary">CHETRA SOM</span> | All Rights Reserved {year}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
