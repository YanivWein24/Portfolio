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
        {TimelineChapters.map((chapter) => {
          const {
            id,
            header,
            subHeader,
            text,
            date,
            type,
            technologies,
            link,
            image,
            scores,
          } = chapter;
          const isActiveChapter = [0, 1].includes(id);
          return (
            <VerticalTimelineElement
              key={id}
              className={`vertical-timeline-element--work ${
                type === "school" ? "redBorder" : "blueBorder"
              } ${isActiveChapter && "current"}`}
              contentStyle={{
                background: isActiveChapter ? "rgb(33, 150, 243)" : "",
              }}
              contentArrowStyle={{
                borderRight: isActiveChapter
                  ? "7px solid  rgb(33, 150, 243)"
                  : "",
              }}
              date={date}
              iconStyle={{
                background:
                  type === "school" ? "rgb(233, 30, 99)" : "rgb(33, 150, 243)",
                display: "flex",
              }}
              icon={
                <img
                  src={
                    type === "school"
                      ? School
                      : type === "work"
                        ? Suitcase
                        : Anchor
                  }
                  alt="icon"
                  className="timelineIcon"
                />
              }
            >
              <h3
                className={`vertical-timeline-element-title ${
                  isActiveChapter ? "timelineCurrentHeader" : "timelineHeader"
                }`}
              >
                {header}
              </h3>
              <h4
                className={`vertical-timeline-element-subtitle ${
                  isActiveChapter ? "timelineCurrentHeader" : "timelineHeader"
                }`}
              >
                {subHeader}
              </h4>
              <p
                className={
                  isActiveChapter
                    ? "timelineText timelineCurrentText"
                    : "timelineText"
                }
              >
                {text}
              </p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="timeLineLinkIcon"
                >
                  <i className="fa-solid fa-link" />
                </a>
              )}
              {scores && (
                <p>
                  Final Score: <strong>{scores.final}</strong> <br />
                  Final Project Score: <strong>{scores.project}</strong>
                </p>
              )}
              <div className="toolsContainer">
                {technologies &&
                  technologies.map((tool) => (
                    <div
                      key={tool}
                      className={`tool ${isActiveChapter && "socialo"}`}
                    >
                      {tool}
                    </div>
                  ))}
              </div>
              {image && (
                <a
                  href={link ?? ""}
                  target="_blank"
                  rel="noreferrer"
                  className={!link ? "disableNavigation" : ""}
                >
                  <img
                    src={image}
                    alt={subHeader ?? ""}
                    className="timeLineImage"
                  />
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
