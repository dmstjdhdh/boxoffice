import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ContainerView from "../components/ContainerView";
import CardView from "../components/CardView";

const MovieList = () => {
    const [movies, setMovies] = useState([])

    const getMovieList = async () => {
        try{
            const address = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGRkZDE3ODg2YzM5YWQwNGYyMTA4YzU4YzdhYjMyNSIsInN1YiI6IjY0Y2UwMDEwZDlmNGE2MDNiNDlmZGQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OAkt0tW_dGyVk-7QLJj8u_vZbaRTduN23FMmUp7o98Q'
                }
            };

            const result = await axios.get(address, options);

            console.log("&&&&&&&&&&&&&&&&&&&", result.data.results);

            setMovies(result.data.results);
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getMovieList();
    }, []);

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