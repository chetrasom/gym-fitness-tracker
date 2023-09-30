import { Link } from 'react-router-dom';
import { breadcrumb } from '../../utils/staticData';
import { FaChevronRight } from 'react-icons/fa';

const BreadCrumb = ({ title, exercise }) => {
    return (
        <div 
            className='h-[500px] bg-center bg-no-repeat bg-cover bg-bl4'
            style={{ backgroundImage: `url('${breadcrumb}')` }}
        >
            <div className="container h-full">
                <div className='h-full flex flex-col items-center justify-center gap-y-7 text-white'>
                    <h2 className='text-4xl lg:text-6xl text-center uppercase'>{title}</h2>
                    <ul className='flex flex-wrap items-center gap-x-2 text-lg font-medium tracking-widest'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="/" className='text-sm'>
                                <FaChevronRight />
                            </a>
                        </li>
                        <li> 
                            {exercise && (
                                <Link to="/exercise" className='flex items-center'>
                                    Exercise <span className='text-sm text-white'><FaChevronRight /></span>
                                </Link>
                            )}
                        </li>
                        <li>
                            <span className='capitalize text-primary'>{title}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
