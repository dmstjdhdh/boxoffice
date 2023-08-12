import axios from "axios";

const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGRkZDE3ODg2YzM5YWQwNGYyMTA4YzU4YzdhYjMyNSIsInN1YiI6IjY0Y2UwMDEwZDlmNGE2MDNiNDlmZGQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OAkt0tW_dGyVk-7QLJj8u_vZbaRTduN23FMmUp7o98Q'
    }
})

export default tmdbApi;