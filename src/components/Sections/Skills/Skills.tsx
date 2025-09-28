import { Row, Col } from "react-bootstrap";
import useWindowSize from "../../../hooks/useWindowSize";
import Text from "../../../constants";
import SkillsList from "../../../data/SkillsList";
import Skill from "./Skill";
import "./Skills.css";

export default function Skills() {
  const { mobileSize, innerWidth } = useWindowSize();
  const bootstrapLaptopSize = innerWidth < 1120;

  const skillsSets = ["frontend", "backend", "crm", "misc"] as const;

  return (
    <div className="skills" id="Skills">
      <h1 data-aos={mobileSize ? "fade-right" : "fade-up"} data-aos-once="true">
        {Text.headers.skills}
      </h1>
      <Row className={`${!mobileSize && "container"} mx-auto`}>
        {skillsSets.map((skillSet, index) => {
          const skillsListGridStyles = {
            display: "grid",
            gridTemplateColumns: `repeat(${
              mobileSize ? 3 : bootstrapLaptopSize ? 4 : 4
            }, 1fr)`,
          };

          const skillsSetAnimation = !bootstrapLaptopSize
            ? "fade-down"
            : index % 2
              ? "fade-right"
              : "fade-left";

          return (
            <Col
              xs={12}
              xl={6}
              key={skillSet}
              className="mx-auto skillsSetContainer"
            >
              <div
                className="skillsSet"
                data-aos={skillsSetAnimation}
                data-aos-once="true"
              >
                <h2>{Text.headers[skillSet]}</h2>
                <hr />
                <div style={skillsListGridStyles}>
                  {SkillsList[skillSet].map((skill) => (
                    <div className="skillContainer" key={skill.name}>
                      <Skill {...skill} />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
