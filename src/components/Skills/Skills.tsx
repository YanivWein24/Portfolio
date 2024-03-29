import { Row, Col } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import Text from "../../constants";
import SkillsList from "../../data/SkillsList";
import Skill from "./Skill";
import "./Skills.css";

export default function Skills() {
  const { mobileSize } = useWindowSize();

  const skillsSets = ["frontend", "backend", "misc"] as const;

  return (
    <div className="skills" id="Skills">
      <h1 data-aos="fade-right" data-aos-once="true">
        {Text.headers.skills}
      </h1>
      {skillsSets.map((skillSet, index) => (
        <div
          className="skillsSet"
          data-aos={index % 2 ? "fade-right" : "fade-left"}
          data-aos-once="true"
          key={skillSet}
        >
          <h2>{Text.headers[skillSet]}</h2>
          <hr />
          <Row>
            <Col>
              {SkillsList[skillSet].map(({ id, name, color, link, img }) => (
                <div className="skillContainer" key={id}>
                  <Skill name={name} color={color} link={link} img={img} />
                  {!mobileSize && (id === 3 || id === 7) && (
                    <>
                      <br /> <br />
                    </>
                  )}
                </div>
              ))}
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
