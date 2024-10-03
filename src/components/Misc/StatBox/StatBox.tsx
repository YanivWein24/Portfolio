import AnimatedNumbers from "react-animated-numbers";
import { Col } from "react-bootstrap";
import { StatBoxProps } from "../../../types/StatBoxProps";
import { ReactComponent as BlueGraph } from "../../../assets/media/BlueGraph.svg";
import "./StatBox.css";

function StatBox({ title, number }: StatBoxProps) {
  const fontStyle = {
    fontSize: 36,
    color: "#00172f",
    fontWeight: "600",
  };

  return (
    <Col className="StatBoxContainer">
      <p>{title}</p>
      <div className="AnimatedNumbersContainer">
        <AnimatedNumbers
          includeComma
          className="AnimatedNumbers"
          transitions={(index) => ({ duration: index + 0.5 })}
          animateToNumber={number}
          fontStyle={fontStyle}
        />
        <h2>+</h2>
      </div>
      <BlueGraph className="graph" />
    </Col>
  );
}

export default StatBox;
