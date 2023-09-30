import { useEffect, useState } from "react"
import { useGlobalExercise } from "../../context/exercises_context"

import ExerciseCard from "./ExerciseCard"
import Pagination from "../pagination/Pagination"

const Exercises = () => {
    const { exercises: data } = useGlobalExercise();

    // Pagination
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data.length / itemsPerPage))
    }, [data, itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset)

        window.scrollTo({ top: "2023", behavior: "smooth" })
    }

    return (
        <section className="bg-bl4 pt-0">
            <div className="container">

                <div className='space-y-4 mb-16 text-center lg:text-left'>
                    <span className='text-primary font-medium tracking-widest uppercase'>search Information</span>
                    <h3 className='text-white text-3xl lg:text-4xl uppercase'>
                        Show <span className="text-primary">Exercise</span> Results
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                    {/* pagination - currentItems */}
                    {currentItems.map((exercise) => {
                        return <ExerciseCard key={exercise.id} {...exercise} />
                    })}
                </div>

                {/* Pagination */}
                <div>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                </div>

            </div>
        </section>
    )
}

export default Exercises
