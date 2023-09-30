import { Link } from "react-router-dom";
import { navigation } from '../../utils/staticData';

const Navbar = () => {
    return (
        <nav className="hidden lg:flex">
            <ul className="flex items-center gap-x-10">
                {navigation.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link 
                                to={item.path} 
                                className="uppercase font-oswald tracking-wider hover:text-primary ease-in-out duration-150"
                            >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}

                {/* <li>
                    <Link 
                        to="/info"
                        className="uppercase font-oswald tracking-wider text-primary hover:text-primary ease-in-out duration-150"
                    >
                        Contact Me
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar
