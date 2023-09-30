import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchData, exerciseOptions, youtubeOptions } from '../hooks/fetchData';

import BreadCrumb from "../components/breadcrumb/BreadCrumb"
import ContentDetail from "../components/singledetails/ContentDetail"
import ExerciseVideo from "../components/singledetails/ExerciseVideo";
import SimilarExercises from "../components/singledetails/SimilarExercises";
import Equipment from '../components/singledetails/Equipment';

const SingleDetailPage = () => {
    const { id } = useParams();

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    

    useEffect(() => {
        const fetchExercisesData = async () => {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData)

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents)

            const targetMuscleExercisesData = await fetchData(`/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equimentExercisesData = await fetchData(`/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equimentExercisesData);
        }

        fetchExercisesData();
    }, [id]);

    const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

    return (
        <>
            <BreadCrumb title={name} exercise />
            
            <section className="bg-bl4 text-white">
                <div className="container">
                    <div className="flex flex-wrap items-center gap-12 flex-col lg:flex-row">
                        <figure className="flex-1 w-full min-h-[300px] md:min-h-[500px] rounded-sm overflow-hidden border border-primary p-3">
                            <img src={gifUrl} alt={name} className="w-full h-full object-cover rounded-sm" />
                        </figure>
                        <div className="flex-1">
                            <h2 className="text-5xl text-primary uppercase">
                                {name}
                            </h2>
                            <p className="py-7">
                                Exercises keep you strong.{' '}
                                <span className="capitalize">{name}</span> bup is one
                                of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                                <br /> mood and gain energy.
                            </p>

                            <ContentDetail bodyPart={bodyPart} target={target} equipment={equipment} />
                        </div>
                    </div>
                </div>
            </section>

            <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />

            <SimilarExercises targetMuscleExercises={targetMuscleExercises} />

            <Equipment equipmentExercises={equipmentExercises} />
        </>
    )
}

export default SingleDetailPage
