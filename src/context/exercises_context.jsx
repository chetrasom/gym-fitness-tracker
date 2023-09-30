import { createContext, useContext, useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../hooks/fetchData";

const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]); // bodyParts category
    const [activeBodyPart, setActiveBodyPart] = useState('all'); // Active

    // Exercises
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (activeBodyPart === 'all') {
                exercisesData = await fetchData('/exercises', exerciseOptions)
            } else {
                exercisesData = await fetchData(`/exercises/bodyPart/${activeBodyPart}`, exerciseOptions)
            }

            setExercises(exercisesData)
        }
        fetchExercisesData();
    }, [activeBodyPart]);

    // bodyParts category
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('/exercises/bodyPartList', exerciseOptions);
            
            setBodyParts(["all", ...bodyPartsData])
        }

        fetchExercisesData();
    }, []);

    // Search and Exercises
    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('/exercises', exerciseOptions);

            const searchExercies = exercisesData.filter((exercise) => {
                return (
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
                )
            }
                
            )

            setSearch("")
            setExercises(searchExercies)
        }
    }

    return (
        <ExercisesContext.Provider value={{
            search, setSearch, handleSearch,
            bodyParts, setBodyParts,
            activeBodyPart, setActiveBodyPart,
            exercises, setExercises
        }}>
            {children}
        </ExercisesContext.Provider>
    )
}

export const useGlobalExercise = () => {
    return useContext(ExercisesContext);
}