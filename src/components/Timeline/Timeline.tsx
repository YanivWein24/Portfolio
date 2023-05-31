import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineChapters from "../../data/TimelineChapters";
import Suitcase from "../../assets/media/suitcase.svg";
import School from "../../assets/media/school.svg";
import Anchor from "../../assets/media/anchor.svg";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <h1 id="TimeLine" data-aos="fade-down" data-aos-once="true">
        TimeLine
      </h1>
      <VerticalTimeline>
        {TimelineChapters.map((chapter) => (
          <VerticalTimelineElement
            className={`vertical-timeline-element--work ${
              chapter.type === "school" ? "redBorder" : "blueBorder"
            } ${chapter.id === 0 && "current"}`}
            contentStyle={{
              background: chapter.id === 0 ? "rgb(33, 150, 243)" : "",
            }}
            contentArrowStyle={{
              borderRight:
                chapter.id === 0 ? "7px solid  rgb(33, 150, 243)" : "",
            }}
            date={chapter.date}
            iconStyle={{
              background:
                chapter.type === "school"
                  ? "rgb(233, 30, 99)"
                  : "rgb(33, 150, 243)",
              display: "flex",
            }}
            icon={
              <img
                src={
                  chapter.type === "school"
                    ? School
                    : chapter.type === "work"
                    ? Suitcase
                    : Anchor
                }
                alt=""
                className="timelineIcon"
              />
            }
          >
            <h3
              className={`vertical-timeline-element-title ${
                chapter.id === 0 ? "timelineCurrentHeader" : "timelineHeader"
              }`}
            >
              {chapter.header}
            </h3>
            <h4
              className={`vertical-timeline-element-subtitle ${
                chapter.id === 0 ? "timelineCurrentHeader" : "timelineHeader"
              }`}
            >
              {chapter.subHeader}
            </h4>
            <p
              className={
                chapter.id === 0
                  ? "timelineText timelineCurrentText"
                  : "timelineText"
              }
            >
              {chapter.text}
            </p>
            {chapter.scores && (
              <p>
                Final Score: <strong>{chapter.scores.final}</strong> <br />
                Final Project Score: <strong>{chapter.scores.project}</strong>
              </p>
            )}
            <div className="toolsContainer">
              {chapter.technologies &&
                chapter.technologies.map((tool) => (
                  <div
                    key={tool}
                    className={`tool ${chapter.id === 0 && "socialo"}`}
                  >
                    {tool}
                  </div>
                ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
