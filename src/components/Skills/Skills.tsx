import { useState } from "react";
import "./Skills.css";
import { Row, Col } from "react-bootstrap";
import { SkillsList, FamiliarSkillsList } from "../../data/SkillsList";
import { FamiliarSkillProps, SkillProps } from "../../types/SkillsProps";

const Skill = ({ name, color, link, img }: SkillProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <div
      className="skill"
      style={{
        boxShadow: isHovering
          ? `1px 1px 10px 5px ${color}`
          : `1px 1px 10px 2px ${color}`,
      }}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <p style={{ color: `${color}` }}>{name}</p>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img src={img} alt={name} />
      </a>
    </div>
  );
};

const FamiliarSkill = ({
  name,
  link,
  img,
  smallScreen,
}: FamiliarSkillProps) => (
  <div
    className="skill familiarSkill"
    data-aos={smallScreen && "fade-down"}
    data-aos-once={smallScreen && "true"}
    style={{ transition: "all .3s ease" }}
  >
    <p>{name}</p>
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {" "}
      <img src={img} alt={name} />
    </a>
  </div>
);

const Skills = () => {
  const smallScreen: Boolean = window.innerWidth < 940;

  return (
    <div className="skills" id="Skills">
      <h1 data-aos="fade-right" data-aos-once={smallScreen && "true"}>
        Skills:
      </h1>
      <div data-aos="fade-left" data-aos-once={smallScreen && "true"}>
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
                {window.innerWidth > 1200 && skill.id === 4 && (
                  <>
                    <br /> <br />
                  </>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div data-aos="fade-right" data-aos-once={smallScreen && "true"}>
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
                {window.innerWidth > 1200 && skill.id === 3 && (
                  <>
                    <br /> <br />
                  </>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div data-aos="fade-left" data-aos-once={smallScreen && "true"}>
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
                {window.innerWidth > 1200 && skill.id === 3 && (
                  <>
                    <br /> <br />
                  </>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <div data-aos="fade-down" data-aos-once={smallScreen && "true"}>
        <h2 className="familiarHeader">
          Also familiar with the following CS concepts:
        </h2>
        <hr />
        <Row>
          <Col>
            {FamiliarSkillsList.map((skill) => (
              <FamiliarSkill
                key={skill.id}
                name={skill.name}
                link={skill.link}
                img={skill.img}
                smallScreen={smallScreen}
              />
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
