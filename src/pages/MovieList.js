import React from 'react';
import {Alert, Row} from "react-bootstrap";
import ContainerView from "../components/ContainerView";
import CardView from "../components/CardView";
import {useFetchMovies} from "../services/getMovies";
import LoadingView from "../components/LoadingView";

const MovieList = () => {
    const {data: movies, isLoading } = useFetchMovies();

    if(isLoading){
        return (
            <LoadingView/>
        )
    }

    return (
        <ContainerView title={"MovieList"}>
            <Row>
                {movies && movies.map((movie, index) =>(
                    <CardView data={movie} key={index}/>
                ))}
            </Row>
        </ContainerView>
    );
};

export default MovieList;