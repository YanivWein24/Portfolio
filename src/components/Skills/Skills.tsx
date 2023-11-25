import { Row, Col } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import SkillsList from "../../data/SkillsList";
import Skill from "./Skill";
import "./Skills.css";

export default function Skills() {
  const { mobileSize } = useWindowSize();

  return (
    <div className="skills" id="Skills">
      <h1 data-aos="fade-right" data-aos-once="true">
        Skills:
      </h1>
      <div className="skillsSet" data-aos="fade-left" data-aos-once="true">
        <h2>Front-End:</h2>
        <hr />
        <Row>
          <Col>
            {SkillsList.frontend.map((skill) => (
              <div className="skillContainer" key={skill.id}>
                <Skill
                  name={skill.name}
                  color={skill.color}
                  link={skill.link}
                  img={skill.img}
                />
                {!mobileSize && (skill.id === 3 || skill.id === 7) && (
                  <>
                    <br /> <br />
                  </>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div className="skillsSet" data-aos="fade-right" data-aos-once="true">
        <h2>Back-End:</h2>
        <hr />
        <Row>
          <Col>
            {SkillsList.backend.map((skill) => (
              <div className="skillContainer" key={skill.id}>
                <Skill
                  name={skill.name}
                  color={skill.color}
                  link={skill.link}
                  img={skill.img}
                />
                {!mobileSize && skill.id === 3 && (
                  <>
                    <br /> <br />
                  </>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div className="skillsSet" data-aos="fade-left" data-aos-once="true">
        <h2>Misc:</h2>
        <hr />
        <Row>
          <Col>
            {SkillsList.misc.map((skill) => (
              <div className="skillContainer" key={skill.id}>
                <Skill
                  name={skill.name}
                  color={skill.color}
                  link={skill.link}
                  img={skill.img}
                />
                {!mobileSize && skill.id === 3 && (
                  <>
                    <br /> <br />
                  </>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}
