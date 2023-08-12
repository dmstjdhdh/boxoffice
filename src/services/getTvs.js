import tmdbApi from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchTvs = async () => {
    const {data} = await tmdbApi.get("/tv/airing_today?language=en-US&page=1");

    return data.results;
}

const useFetchTvs = () =>
    useQuery(["tvs"], () => fetchTvs(), {
        keepPreviousData: true,
    })

export {useFetchTvs}