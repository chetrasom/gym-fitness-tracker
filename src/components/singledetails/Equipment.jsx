import ArrowSlider from "./ArrowSlider"
import Loading from "../loading/Loading"

const Equipment = ({ equipmentExercises }) => {
    return (
        <section className="bg-bl4 pt-0">
            <div className="container">

            <div className='text-left space-y-4 mb-16'>
                <h3 className='text-white capitalize text-3xl lg:text-4xl'>
                    similar {" "}
                    <span className="text-primary">Equipment</span>
                    {" "}
                    Exercises
                </h3>
            </div>

                {equipmentExercises.length !== 0 ? <ArrowSlider data={equipmentExercises} /> : <Loading />}
            </div>
        </section>
    )
}

export default Equipment
