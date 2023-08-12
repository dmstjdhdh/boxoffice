import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import {useFetchMovieAndTvById} from "../services/getMovieandTvById";
import data from "bootstrap/js/src/dom/data";
import LoadingView from "../components/LoadingView";

const Detail = () => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log("+++++++++++++++++++++++",location.pathname.includes("movie"));

    const {movieId, tvId} = useParams()

    const {data , isLoading} = useFetchMovieAndTvById(
        location.pathname.includes("movie") ? "movie" : "tv",
        location.pathname.includes("movie") ? movieId : tvId
    );

    if(isLoading){
        return (
            <LoadingView/>
        )
    }

    return (
        <Container>
            <Button onClick={() => navigate(-1)}>
                뒤로가기
            </Button>
            <h1>
                {data.title ? data.title : data.name};
            </h1>
            <h3>
                {data.overview}
            </h3>
        </Container>
    );
};

export default Detail;