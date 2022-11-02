import "./content.scss";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {  } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faGraduationCap,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  "a FrontEnd-Developer",
  "an Engineer",
  "a Photograher",
  "a Traveller",
  "a Content-writer",
  "a Coding Instructor"
];

export default function Content() {
  return (
    <div>
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <div className="main">
      <div className="image">
        <div className="block1"></div>
        <div className="block2">
          <img
            className="myImage"
            src="https://i.ibb.co/4WVqZz7/Snapchat-1032562174-01.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="text">
        <div className="info">
          <div className="welcome">
            <p>
              Hello, <br /> I'm Azar
            </p>
          </div>
          <div className="info-in">
            <div className="im">
              <span>I'm </span>{" "}
              <Typed
                className="typing"
                strings={skills}
                loop
                typeSpeed={80}
                backSpeed={60}
                smartBackspace
                shuffle={false}
                backDelay={5}
                fadeOut={false}
                fadeOutDelay={600}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </div>
            <div className="more">
              <p>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  color="#555"
                  style={{ fontSize: "24px", margin: "0px  10px 0 0" }}
                />{" "}
                Tata Consultancy Services
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  color="#555"
                  style={{ fontSize: "24px", margin: "0px  10px 0 0" }}
                />
                Toppr Codr
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  color="#555"
                  style={{ fontSize: "24px", margin: "0px  10px 0 0" }}
                />
                National Institute of Technology Andhra pradesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
