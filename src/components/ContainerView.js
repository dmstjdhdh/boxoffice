import React from 'react';
import {Container} from "react-bootstrap";

const ContainerView = ({title, children}) => {
    return (
        <Container className={"mt-5"}>
            <h1>
                {title}
            </h1>
            {children}
        </Container>
    );
};

export default ContainerView;