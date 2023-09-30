import api from "../utils/apiURL"; // baseURL

// #1- ExerciseDB
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_FITNESS_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};

// #2- Youtube Search and Download
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_FITNESS_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
};


export const fetchData = async (url, options) => {
    const response = await api.get(url, options)
    const data = await response.data

    return data;
}