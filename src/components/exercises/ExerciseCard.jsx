import { Link } from "react-router-dom"

const ExerciseCard = ({ id, bodyPart, gifUrl, name, target }) => {
    return (
        <div className="p-2 md:p-4 rounded-sm">
            <Link to={`/exercise/${id}`}>
                <figure className="h-auto lg:h-[250px] w-full rounded-sm mb-4 overflow-hidden">
                    <img src={gifUrl} alt="exercise-image" className="" />
                </figure>

                <div className="flex flex-wrap items-center gap-2 md:gap-x-4 text-[15px] mb-4">
                    <button type="button" className="labelBtn">
                        {bodyPart}
                    </button>
                    <button type="button" className="labelBtn">
                        {target}
                    </button>
                </div>
                
                <h3 className="text-xl lg:text-2xl text-white font-semibold">
                    {name}
                </h3>
            </Link>
        </div>
    )
}

export default ExerciseCard
