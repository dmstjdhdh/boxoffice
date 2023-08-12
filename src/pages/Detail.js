import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Container} from "react-bootstrap";

const Detail = () => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log("+++++++++++++++++++++++",location.pathname.includes("movie"));

    const provider = location.pathname.includes("movie") ? "movie" : "tv";

    const {movieId, tvId} = useParams()

    const id = movieId ? movieId : tvId;

    const [item, setItem] = useState({});

    const getOTTdata = async () => {
        try{
            const address = `https://api.themoviedb.org/3/${provider}/${id}?language=en-US`
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGRkZDE3ODg2YzM5YWQwNGYyMTA4YzU4YzdhYjMyNSIsInN1YiI6IjY0Y2UwMDEwZDlmNGE2MDNiNDlmZGQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OAkt0tW_dGyVk-7QLJj8u_vZbaRTduN23FMmUp7o98Q'
                }
            }

            const result = await axios.get(address, options);

            console.log("##################", result.data);

            setItem(result.data);
        }
        catch (err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        getOTTdata();
    }, []);

    return (
        <Container>
            <Button onClick={() => navigate(-1)}>
                뒤로가기
            </Button>
            <h1>
                {item.title ? item.title : item.name};
            </h1>
            <h3>
                {item.overview}
            </h3>
        </Container>
    );
};

export default Detail;