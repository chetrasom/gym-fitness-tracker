import { useGlobalExercise } from "../../context/exercises_context"

const SearchExercise = () => {
    const { search, setSearch, handleSearch } = useGlobalExercise();

    return (
        <section className="bg-bl4">
            <div className="container">

                <div className='text-center space-y-4 mb-16'>
                    <span className='text-primary font-medium tracking-widest'>HOW TO GYM?</span>
                    <h3 className='text-white text-3xl lg:text-4xl'>SEARCH AWESOME EXERCISES</h3>
                </div>

                <div className="w-full max-w-2xl mx-auto h-12">
                    <form className="flex items-center h-full">
                        <input 
                            type="text" 
                            name="search" 
                            id="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value.toLowerCase())} 
                            placeholder="Search exercises"
                            autoComplete="off"
                            className="w-full h-full focus:outline-none pl-6 rounded-tl-sm rounded-bl-sm"
                        />
                        <button 
                            type="button"
                            onClick={handleSearch} 
                            className="bg-primary h-full px-6 rounded-tr-sm rounded-br-sm text-white font-medium"
                        >
                            Search
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default SearchExercise
