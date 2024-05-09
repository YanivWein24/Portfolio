import { Row, Col } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";
import Text from "../../constants";
import SkillsList from "../../data/SkillsList";
import Skill from "./Skill";
import "./Skills.css";

export default function Skills() {
  const { mobileSize, innerWidth } = useWindowSize();
  const bootstrapLaptopSize = innerWidth < 1120;

  const skillsSets = ["frontend", "backend", "misc"] as const;

  return (
    <div className="skills" id="Skills">
      <h1 data-aos={mobileSize ? "fade-right" : "fade-up"} data-aos-once="true">
        {Text.headers.skills}
      </h1>
      <Row className={`${!mobileSize && "container"} mx-auto`}>
        {skillsSets.map((skillSet, index) => {
          const isMiscSection = index === 2;

          const skillsListGridStyles = {
            display: "grid",
            gridTemplateColumns: `repeat(${
              mobileSize ? 3 : bootstrapLaptopSize ? 4 : isMiscSection ? 6 : 4
            }, 1fr)`,
          };

          const skillsSetAnimation =
            !bootstrapLaptopSize && isMiscSection
              ? "fade-down"
              : index % 2
                ? "fade-right"
                : "fade-left";

          return (
            <Col
              xs={12}
              xl={isMiscSection ? 12 : 6}
              key={skillSet}
              className={`mx-auto skillsSetContainer ${
                isMiscSection && "miscSection"
              }`}
            >
              <div
                className="skillsSet"
                data-aos={skillsSetAnimation}
                data-aos-once="true"
              >
                <h2>{Text.headers[skillSet]}</h2>
                <hr />
                <div style={skillsListGridStyles}>
                  {SkillsList[skillSet].map(
                    ({ id, name, color, link, img }) => (
                      <div className="skillContainer" key={id}>
                        <Skill
                          name={name}
                          color={color}
                          link={link}
                          img={img}
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
