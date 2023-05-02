import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Suitcase from "../../assets/media/suitcase.svg";
import School from "../../assets/media/school.svg";
import Anchor from "../../assets/media/anchor.svg";
import Star from "../../assets/media/star.svg";

export default function Timeline() {
  const socialoTools = [
    "React",
    "Node.js",
    "MongoDB",
    "Oauth",
    "TypeScript",
    "Context",
    "React-Query",
    "Formik",
    "Styled-Components",
    "Material-UI",
  ];

  const ebigayTools = [
    "React",
    "TypeScript",
    "PWA",
    "Context",
    "React-Query",
    "Formik",
    "Styled-Components",
    "Material-UI",
  ];

  return (
    <div className="timeline-container">
      <h1 id="TimeLine" data-aos="fade-down" data-aos-once="true">
        TimeLine
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work blueBorder current"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jan 2023 - Present"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            display: "flex",
          }}
          icon={<img src={Suitcase} alt="" className="timelineIcon" />}
        >
          <h3 className="vertical-timeline-element-title timelineCurrentHeader">
            Full-Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle timelineCurrentHeader">
            Socialo
          </h4>
          <p className="timelineCurrentText">
            Developing from scratch an AI-based SAAS digital marketing platform
            for businesses and marketing agencies. Automating the process of
            creating, refining, and publishing professional posts on social
            media. Enabling companies to efficiently create and maintain
            high-quality content quickly and with ease.
          </p>
          <div className="toolsContainer">
            {socialoTools.map((tool) => (
              <div key={tool} className="tool socialo">
                {tool}
              </div>
            ))}
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work blueBorder"
          date="Oct 2022 - Feb 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", display: "flex" }}
          icon={<img src={Suitcase} alt="" className="timelineIcon" />}
        >
          <h3 className="vertical-timeline-element-title timelineHeader">
            Front-End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle timelineHeader">
            eBigay
          </h4>
          <p>
            Working in the frontend team for a marketplace web app that connects
            donors with those in need. Developing responsive and user-friendly
            UI from scratch, according to the given design in Figma. Consuming
            the server API and working alongside the back-end team. Working with
            SCRUM methodology.
          </p>
          <div className="toolsContainer">
            {ebigayTools.map((tool) => (
              <div key={tool} className="tool">
                {tool}
              </div>
            ))}
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work redBorder"
          date="2022 - Present"
          iconStyle={{ background: "rgb(233, 30, 99)", display: "flex" }}
          icon={<img src={School} alt="" className="timelineIcon" />}
        >
          <h3 className="vertical-timeline-element-title timelineHeader">
            Full-Stack Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle timelineHeader">
            Self study
          </h4>
          <p>
            Learn Full-Stack web development using online courses and a lot of
            hands-on projects, mostly with React and Node.js.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work blueBorder"
          date="2019 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", display: "flex" }}
          icon={<img src={Anchor} alt="" className="timelineIcon" />}
        >
          <h3 className="vertical-timeline-element-title timelineHeader">
            Control Systems Technician
          </h3>
          <h4 className="vertical-timeline-element-subtitle timelineHeader">
            Israeli Navy
          </h4>
          <p>
            Locating and solving complex problems on large-scale naval systems.
            Working in a team and working with tight schedules.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education redBorder"
          date="2017 - 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", display: "flex" }}
          icon={<img src={School} alt="" className="timelineIcon" />}
        >
          <h3 className="vertical-timeline-element-title timelineHeader">
            Practical Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle timelineHeader">
            Kziney-Yam Acre
          </h4>
          <p>
            Electrical And Electronics Engineering.
            <br />
            <br />
            Final Score: <strong>87</strong> <br />
            Final Project Score: <strong>97</strong>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education redBorder"
          date="2015 - 2017"
          iconStyle={{ background: "rgb(233, 30, 99)", display: "flex" }}
          icon={<img src={School} alt="" className="timelineIcon" />}
        >
          <h3 className="vertical-timeline-element-title timelineHeader">
            High-School
          </h3>
          <h4 className="vertical-timeline-element-subtitle timelineHeader">
            Kziney-Yam Acre
          </h4>
          <p>
            Electrical And Electronics Engineering - 10 points
            <br />
            <br />
            Final Score: <strong>94</strong> <br />
            Final Project Score: <strong>100</strong>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(245, 234, 79)", display: "flex" }}
          icon={<img src={Star} alt="" className="timelineIcon" />}
        />
      </VerticalTimeline>
    </div>
  );
}
