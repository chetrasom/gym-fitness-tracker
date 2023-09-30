import axios from "axios";

export default axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com'
});