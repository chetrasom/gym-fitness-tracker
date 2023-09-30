import { Link } from "react-router-dom"
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <section className="bg-bl4 pb-0">
            <div className="container h-[80vh] flex flex-col items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-[200px] font-bold">404</h1>
                    <h2 className="text-2xl">Opps! This page Could Not Be Found!</h2>
                    <p className="text-customGray mt-2 mb-4">
                        Sorry bit the page you are looking for does not exist, have been removed or name changed.
                    </p>
    
                    <div>
                        <Link to='/' className="flex justify-center items-center gap-3 uppercase font-bold max-w-max mx-auto border-b border-b-customGray pb-1">
                            <span className="text-primary text-xl"><FaHome /></span>
                            <h4 className="hover:text-primary">go back home</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage
