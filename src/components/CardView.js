import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

const CardView = ({data}) => {
    return (
        <Col className={"mt-3"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src={data.poster_path !== null
                        ? "https://image.tmdb.org/t/p/w500"+data.poster_path
                        : "https://www.gtn-co.com/cms/wp-content/uploads/2020/06/noimage.jpg"
                }
                />
                <Card.Body>
                    <Card.Title>
                        {data.title ? data.title.slice(0, 10) : data.name.slice(0, 10)}
                    </Card.Title>
                    <Card.Text>
                        {data.overview.slice(0,90)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardView;