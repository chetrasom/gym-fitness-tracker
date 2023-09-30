import { Link } from "react-router-dom";
import { logo } from "../../utils/staticData";
import { navigation } from '../../utils/staticData';
import { FaTimes } from 'react-icons/fa';

const NavMobile = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`${isOpen ? 'left-0':'-left-full'} fixed top-0 z-20 h-screen max-w-[300px] w-full bg-bl2 p-6 ease-in-out transition-all duration-500`}>

                <div className="flex items-center justify-between mb-16">
                    <figure>
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <img src={logo} alt="logoImg" className="w-[80%] h-full" />
                        </Link>
                    </figure>
                    <button 
                        type="button" 
                        aria-label="menu toggle"
                        className="lg:hidden text-2xl border border-white text-white rounded-sm p-1"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                <ul className="space-y-4">
                    {navigation.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link 
                                    to={item.path} 
                                    className="uppercase font-oswald tracking-wider hover:text-primary ease-in-out duration-150"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* <div className={`${isOpen ? 'opacity-100':'opacity-0'} fixed inset-0 z-10 bg-red-300 ease-in-out transition-all duration-300`}></div> */}
        </>
    )
}

export default NavMobile
