import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { CardProps } from "../../types/CardProps";
import "./Cards.css";

const tabletScreen: boolean =
  window.innerWidth > 768 && window.innerWidth < 1000;
const smallScreen: boolean = window.innerWidth < 768;

function Cards({ project, experienceProject }: CardProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Card
      className={`card-${project.id} ${experienceProject && "experienceCard"}`}
      style={{
        width: smallScreen
          ? "95%"
          : tabletScreen
          ? "92%"
          : experienceProject
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
        <Card.Title className={experienceProject ? "long" : ""}>
          {project.name}
        </Card.Title>
        {experienceProject && (
          <Card.Text style={{ margin: "4px 0" }}>
            <strong className="includesGetJokes">{project.date}</strong>
          </Card.Text>
        )}
        <Card.Text>{project.description}</Card.Text>
        {project.id === 0 &&
          (experienceProject ? (
            <Card.Text>
              <strong className="includesGetJokes">
                Currently running in closed beta
              </strong>
            </Card.Text>
          ) : (
            <Card.Text>
              <strong className="includesGetJokes">
                Includes Unit Tests And CI/CD
              </strong>
            </Card.Text>
          ))}
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
        {!experienceProject && (
          <>
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
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cards;
