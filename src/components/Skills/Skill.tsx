import { useState } from "react";
import { FamiliarSkillProps, SkillProps } from "../../types/SkillsProps";

function Skill({ name, color, link, img }: SkillProps) {
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
}

export function FamiliarSkill({
  name,
  link,
  img,
  smallScreen,
}: FamiliarSkillProps) {
  return (
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
}

export default Skill;
