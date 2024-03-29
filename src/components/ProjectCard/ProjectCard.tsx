import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import { CardProps } from "../../types/CardProps";
import "./ProjectCard.css";

function ProjectCard({ project }: CardProps) {
  const [hover, setHover] = useState<boolean>(false);
  const { innerWidth } = useWindowSize();

  const smallScreen: boolean = innerWidth < 768;
  const tabletScreen: boolean = innerWidth >= 768 && innerWidth < 1000;

  return (
    <Card
      className={`card-${project.id}`}
      style={{
        width: smallScreen ? "95%" : tabletScreen ? "92%" : "21rem",
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
        {project.id === 2 && (
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
      <div className="cardButtonsContainer">
        <Card.Link
          href={project.links[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="greyButton">
            Code
          </button>
        </Card.Link>
        <Card.Link
          href={project.links[1]}
          target={project.links[1] === "/" ? "" : "_blank"}
          rel="noopener noreferrer"
        >
          <button type="button">Live Project</button>
        </Card.Link>
      </div>
    </Card>
  );
}

export default ProjectCard;
