import React from 'react';
import {Row} from "react-bootstrap";
import ContainerView from "../components/ContainerView";
import CardView from "../components/CardView";
import {useFetchTvs} from "../services/getTvs";
import LoadingView from "../components/LoadingView";

const TvList = () => {

    const {data:tvs, isLoading} = useFetchTvs();

    if(isLoading){
        return (
            <LoadingView/>
        )
    }

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