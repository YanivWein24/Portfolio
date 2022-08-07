import React, { FC } from 'react'
import { Card, ListGroup, Button } from "react-bootstrap"
import "./Cards.css"

const smallScreen: boolean = window.innerWidth < 940

interface CardProps {
    project: {
        name: string;
        description: string;
        id: number;
        image: string;
        tools: string[];
        links: string[];
    }
}

const Cards: FC<CardProps> = ({ project }) =>
    <Card style={{ width: smallScreen ? '19rem' : '22rem' }}>
        <Card.Img variant="top" src={project.image} />
        <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>
                {project.description}
            </Card.Text>
            {project.name === 'Get Jokes' &&
                <Card.Text>
                    * Includes Unit Tests
                </Card.Text>
            }
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{project.tools.map(tool => (
                <div key={project.tools.indexOf(tool)} className="tool">{tool}</div>
            ))}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link href={project.links[0]}><Button variant="outline-info">Code</Button></Card.Link>
            <Card.Link href={project.links[1]}><Button variant="outline-info">Live Project</Button></Card.Link>
        </Card.Body>
    </Card>

export default Cards