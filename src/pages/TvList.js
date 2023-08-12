import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ContainerView from "../components/ContainerView";
import CardView from "../components/CardView";

const TvList = () => {

    const [tvs, setTvs] = useState([])
    
    const getTvList = async () => {
        try{
            const address = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";
            const option ={
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGRkZDE3ODg2YzM5YWQwNGYyMTA4YzU4YzdhYjMyNSIsInN1YiI6IjY0Y2UwMDEwZDlmNGE2MDNiNDlmZGQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OAkt0tW_dGyVk-7QLJj8u_vZbaRTduN23FMmUp7o98Q'
                }
            }

            const result = await axios.get(address, option);

            console.log("&&&&&&&&&&&&&&&&&&", result.data.results);

            setTvs(result.data.results);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getTvList();
    }, []);

    return (
        <ContainerView title={"TvList"}>
            <Row>
                {tvs && tvs.map((tv, index) => (
                    <CardView data={tv} key={index}/>
                ))}
            </Row>
        </ContainerView>
    );
};

export default TvList;