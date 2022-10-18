import React, { FC, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Cards.css";

const tabletScreen: boolean =
  window.innerWidth > 768 && window.innerWidth < 1000;
const smallScreen: boolean = window.innerWidth < 768;

interface CardProps {
  project: {
    name: string;
    description: string;
    id: number;
    image: string[];
    tools: string[];
    links: string[];
  };
}

const Cards: FC<CardProps> = ({ project }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Card
      style={{
        width:
          (!smallScreen && project.id === 0) ||
          (!smallScreen && project.id === 1)
            ? "80%"
            : smallScreen
            ? "95%"
            : tabletScreen
            ? "90%"
            : "21rem",
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Card.Img
        variant="top"
        src={hover && project.image[1] ? project.image[1] : project.image[0]}
        alt={project.name}
      />
      <Card.Body className="topCardBody">
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        {project.id === 0 && (
          <Card.Text>
            <strong className="includesGetJokes">
              Includes Unit Tests And CI/CD
            </strong>
          </Card.Text>
        )}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {project.tools.map((tool) => (
            <div key={project.tools.indexOf(tool)} className="tool">
              {tool}
            </div>
          ))}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link
          href={project.links[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="greyButton">Code</button>
        </Card.Link>
        <Card.Link
          href={project.links[1]}
          target={project.links[1] === "/" ? "" : "_blank"}
          rel="noopener noreferrer"
        >
          <button>Live Project</button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Cards;
