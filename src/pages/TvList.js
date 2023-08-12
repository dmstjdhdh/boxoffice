import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ContainerView from "../components/ContainerView";
import CardView from "../components/CardView";
import tmdbApi from "../services/api";

const TvList = () => {

    const [tvs, setTvs] = useState([])
    
    const getTvList = async () => {
        try{
            const result = await tmdbApi.get("/tv/airing_today?language=en-US&page=1");

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