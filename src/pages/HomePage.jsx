import Hero from "../components/hero/Hero"
import Collection from "../components/collection/Collection"
import SearchExercise from "../components/search/SearchExercise"
import Categories from "../components/categories/Categories"
import Exercises from "../components/exercises/Exercises"

const HomePage = () => {
    return (
        <main>
            <Hero />
            <Collection />
            <SearchExercise />
            <Categories />
            <Exercises />
        </main>
    )
}

export default HomePage
