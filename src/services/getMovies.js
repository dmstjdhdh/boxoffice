import tmdbApi from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchMovies = async () => {
    const result = await tmdbApi.get("/movie/now_playing?language=en-US&page=1");
    console.log(result);
    return result.data.results;
}

const useFetchMovies = () =>
    useQuery(["movies"], fetchMovies, {
        keepPreviousData: true,
    })

export {useFetchMovies}