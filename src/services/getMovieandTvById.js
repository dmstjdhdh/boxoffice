import tmdbApi from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchMovieAndTvById = async (provider, id) => {
    const {data} = await tmdbApi.get(`/${provider}/${id}?language=en-US`);
    console.log(data);
    return data;
}

const useFetchMovieAndTvById = (provider, id) =>
    useQuery([provider, id], () => fetchMovieAndTvById(provider, id))

export {useFetchMovieAndTvById}