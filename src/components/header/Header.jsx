import { FaBars } from 'react-icons/fa';

import Logo from "../logo/Logo";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";

import { useState, useEffect } from "react";


const Header = () => {
    const [isActive, setIsActive] = useState(false); // change scroll background
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
        })
    }, []);

    return (
        <header className={`${isActive ? 'bg-bl4 py-5' : 'py-6'} 
        fixed top-0 w-full z-50 text-white  transition-all ease-in-out duration-300`}>
            <div className="container">
                <div className="flex justify-between items-center">
                    <Logo />

                    <Navbar />

                    <div>
                        <button 
                            type="button" 
                            aria-label="join now" 
                            className="hidden lg:flex bg-white text-primary font-oswald font-semibold uppercase rounded-sm py-4 
                            px-6 tracking-widest hover:bg-primary hover:text-white transition-all ease-out duration-200"
                        >
                            join now
                        </button>

                        <button 
                            type="button" 
                            aria-label="menu toggle"
                            className="lg:hidden text-2xl border border-whiteMilk rounded-sm p-1"
                            onClick={() => setIsOpen(true)}
                        >
                            <FaBars />
                        </button>
                    </div>

                    <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />

                </div>
            </div>
        </header>
    )
}

export default Header
