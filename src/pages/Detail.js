import React from 'react';
import {useParams} from "react-router-dom";

const Detail = () => {

    const {movieId, tvId} = useParams()

    const id = movieId ? movieId : tvId;

    // url: 'https://api.themoviedb.org/3/tv/213713?language=en-US',
    //     headers: {
    //     accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGRkZDE3ODg2YzM5YWQwNGYyMTA4YzU4YzdhYjMyNSIsInN1YiI6IjY0Y2UwMDEwZDlmNGE2MDNiNDlmZGQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OAkt0tW_dGyVk-7QLJj8u_vZbaRTduN23FMmUp7o98Q'
    // }
    return (
        <h1>
            {id}
        </h1>
    );
};

export default Detail;