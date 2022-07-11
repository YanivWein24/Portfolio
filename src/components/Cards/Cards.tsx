import React, { FC } from 'react'
import { Card, ListGroup, Button } from "react-bootstrap"
import "./Cards.css"

interface props {
    project: {
        name: string;
        description: string;
        id: number;
        image: string;
        tools: string[];
        links: string[];
    }
}

const Cards: FC<props> = ({ project }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{project.tools}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href={project.links[0]}><Button variant="outline-info">Code</Button></Card.Link>
                <Card.Link href={project.links[1]}><Button variant="outline-info">Live Demo</Button></Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Cards