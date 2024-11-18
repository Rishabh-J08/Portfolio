import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import viteSVG from "../assets/svg/viteLogo.svg";
import vercelSvg from "../assets/svg/vercel.svg"
import "../css/Projects.css";
import firbaseSVG from "../assets/svg/firebase.svg"
import retailSite from "../assets/AddressGenerator.png";
import tboard from "../assets/svg/tboard.png"
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import nodeSVG from "../assets/svg/node.svg"
import mongoDb from "../assets/svg/mongoDb.svg";
import redis from "../assets/svg/redis.svg";
import jwt from "../assets/svg/jwt.svg";
import twilio from "../assets/svg/twilio.svg"
import authImg from "../assets/image.png"


export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
  const reactLogo = (
    <FontAwesomeIcon icon={faReact} style={{ color: "cyan" }} />
  );

  const jsLogo = (
    <FontAwesomeIcon icon={faJsSquare} style={{ color: "gold" }} />
  );
  const netlifyLogo = (
    <img src={vercelSvg} className="netlifyLogo" alt="Vercel Logo" />
  );
  const viteLogo = <img src={viteSVG} className="viteLogo" alt="Vite Logo" />;
  const fireBaseLogo = <img src={firbaseSVG} className="firebaseLogo" alt="Firebase Logo" />;
  const nodeJsLogo = <img src={nodeSVG}/>;
  const mongoDbLogo = <img src={mongoDb} className="MongDbLogo" alt="MongDbLogo" />;
  const redisLogo = <img src={redis} className="Redislogo" alt="redisLogo" />;
  const jwtLogo = <img src={jwt} className="jwtLogo" alt="Jwt Logo" />;
  const twilioLogo = <img src={twilio} className="twilioLogo" alt="Twilio Logo" />;


  function updateIndex(newIndex) {
    newIndex < 0
      ? (newIndex = 0)
      : newIndex >= projects.length
        ? (newIndex = projects.length - 1)
        : newIndex;
    setCurrentIndex(newIndex);
  }

  const projects = [
    {
      name: "Hybrid Auth Backend",
      techstack: (
        <>
        {twilioLogo}
        {redisLogo}
        {jwtLogo}
        </>
      ),
      dependencies: (
        <>
          <p>Express.js</p>
          <p>Node.js</p>
          <p>MongoDb</p>
        </>
      ),
      description: (
        <>
          <p>
            HybridAuth is a secure and scalable authentication system that supports both passwordless (OTP-based) and password-based login methods.
            Built using Node.js and Express.js for a robust backend, it leverages MongoDB for persistent user data storage and Redis for efficient in-memory caching of OTPs.
            Nodemailer and Twilio are integrated to handle OTP delivery via email and SMS, while JWT.io ensures secure session management by caching login credentials in the browser.
            This project highlights my expertise in modern authentication technologies, focusing on performance, reliability, and user-friendly security.
          </p>
        </>
      ),
      demoUrl: "https://github.com/Rishabh-J08/hybrid-authSystem.git",
      image: authImg,
    }
    ,{
      name: "BTC-ADDRESS-DERIVER",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
          {fireBaseLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>BIP32</p>
          <p>React Router</p>
        </>
      ),
      description: (
        <>
          <p>
            This is a mock Address Deriver App using advanced front-end features
            combined with global state management handled by Jotai and
            pagination with React Router. The app generates millions of unique
            crypto addresses and allows users to generate a QR code for easy
            scan and payment to any random address. All payments are directed
            securely to your wallet only. Features include bulk address
            generation, filtering addresses by currency type, viewing and
            copying QR codes for each address, and a secure checkout page for
            verifying transactions. The app also includes mock forms for users
            to simulate payments and track their transaction history.
          </p>
        </>
      ),
      demoUrl: "https://btc-address-deriver-qr-generator.vercel.app/",
      image: retailSite,
    },
    {
      name: "JIRA/KANBAN Board",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>Lucide React</p>
        </>
      ),
      description: (
        <>
          <p>
            Just a simple Jira board clone where you can
            create and assign the tasks to your team.
            Not just that, you can also drage and drop the task from one column
            to another.
          </p>
        </>
      ),
      demoUrl: "https://tboard-five.vercel.app/",
      image: tboard,
    }

  ];

  return (
    <div className="projectWheelContainer" onTouchMove={updateIndex}>
      <div
        className="projectWheel"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, index) => {
          return (
            <section className="project" key={index}>
              <div className="projectImg">
                <img src={project.image} />
              </div>
              <div className="projectInfo">
                <h3>{project.name}</h3>
                <div className="projectStacks">{project.techstack}</div>
                <div className="projectDeps">{project.dependencies}</div>
                <div className="projectDesc">{project.description}</div>
                <a target="_blank" href={project.demoUrl} rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </section>
          );
        })}
      </div>

      <div className="wheel-btns">
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>{" "}
        </button>
        <div className="indicators">
          {projects.map((project, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <button
                className="indicator-btns"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`${index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                    }`}
                >
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
