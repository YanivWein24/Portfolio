import React, { FC } from 'react'
import { Card, ListGroup, Button } from "react-bootstrap"
import "./Cards.css"

const tabletScreen: boolean = window.innerWidth > 768 && window.innerWidth < 1000
const smallScreen: boolean = window.innerWidth < 768

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
    <Card style={{ width: (tabletScreen && project.id === 0) ? '25rem' : (smallScreen || tabletScreen) ? '19rem' : '22rem' }}>
        <Card.Img variant="top" src={project.image} />
        <Card.Body className="topCardBody">
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
            <Card.Link href={project.links[0]} target="_blank" rel="noopener noreferrer"><Button variant="outline-secondary">Code</Button></Card.Link>
            <Card.Link href={project.links[1]} target={project.links[1] === "/" ? "" : "_blank"} rel="noopener noreferrer"><Button variant="outline-info">Live Project</Button></Card.Link>
        </Card.Body>
    </Card>

export default Cards