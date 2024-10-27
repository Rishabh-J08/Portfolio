import { useRef,useState } from "react";
import "../css/HomePage.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Lottie from "lottie-react";
import waveSVG from "../assets/svg/101786-wave.json";
import emailSVG from "../assets/svg/95247-email.json";
import viteSVG from "../assets/svg/viteLogo.svg";
import nodeSVG from "../assets/svg/node.svg"
import web3SVG from "../assets/svg/web3.svg"
import netlifySVG from "../assets/svg/netlifyLogo.svg";
import javaSvg from "../assets/svg/java.svg"
import sassSVG from "../assets/svg/sassLogo.svg";
import myResume from "../assets/pdf/Rishabh-Raj.dev.Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3,
  faJsSquare,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import Projects from "./Projects";


export default function HomePage() {
  const ref = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // After form submission
    setSubmitted(true);

    // Clear the form input fields
    setFormData({ name: "", email: "", message: "" });

    // You can add more logic here, like form validation or sending the data
  };

  return (
    <div className="homePage">
      <Parallax pages={4} ref={ref}>
        {/* Navigation Section */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1.5 }}
          style={{ height: "fit-content" }}
        >
          <nav>
            <h1
              className="logo"
              ref={ref}
              onClick={() => ref.current.scrollTo(0)}
            >
              RISHABH
              <span
                style={{
                  color: "rgb(217, 4, 41)",
                  fontFamily: "Helvetica",
                  fontSize: "65px",
                  margin: "0",
                }}
              >
                .
              </span>
            </h1>
            <ul className="navOptions">
              <li
                ref={ref}
                onClick={() =>
                  window.innerWidth < 768
                    ? ref.current.scrollTo(2.5)
                    : ref.current.scrollTo(2.25)
                }
              >
                PROJECTS
              </li>
              <li ref={ref} onClick={() => ref.current.scrollTo(1)}>
                RESUME
              </li>
              <li
                style={{ fontWeight: "200" }}
                ref={ref}
                onClick={() => ref.current.scrollTo(3)}
              >
                CONTACT
              </li>
            </ul>
          </nav>
        </ParallaxLayer>
        {/* Introduction Section */}
        <ParallaxLayer>
          <section className="introSection">
            <div style={{ display: "flex" }}>
              <div className="introText">
                <h1>MY NAME IS RISHABH</h1>
                <p>SOFTWARE DEVELOPER</p>
                <p>
                  Based in Bengaluru{" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "red" }}
                  />
                </p>
                <div className="contactBtns">
                  <a
                    target="#"
                    href="https://www.linkedin.com/in/rishabh-raj-pathak-42a049237/"
                  >
                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
                  </a>
                  <a target="#" href="">
                    <FontAwesomeIcon className="github" icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="profileImg"></div>
            </div>
          </section>
        </ParallaxLayer>
        {/* SVG Transition Section */}
        <ParallaxLayer offset={0.75} speed={1}>
          <Lottie className="lottieWave" animationData={waveSVG} />
        </ParallaxLayer>
        {/* About Me Section */}
        <ParallaxLayer offset={1}>
          <section className="aboutMe">
            <div className="aboutIntro">
              <h2>ABOUT ME</h2>
              <p>
                I am a fast learner with a deep passion for software development
                and hands-on experience in <strong>Web3 technologies, MERN stack, Java,
                and HasuraDB and API's</strong>. I’m excited to explore opportunities where I can
                apply and expand these skills in real-world projects,
                contributing to impactful web and blockchain applications. I
                believe that working in a dynamic, established environment will
                be key to unlocking my full potential and growing as a valuable
                contributor in the tech field. Although I don't hold a formal
                degree, I've worked hard to develop a solid foundation in the
                skills and qualifications required, as mentioned in the previous
                job description. Given the opportunity, I am confident in my
                ability to deliver high-quality solutions while consistently
                learning and evolving. With excellent communication skills and a
                strong ability to collaborate effectively, I am eager to immerse
                myself in a team that values innovation and growth. I’m
                committed to continuous improvement, and all I need is the
                chance to prove my value and dedication to the role.
              </p>
            </div>
            <div className="aboutResume">
              <object
                data={myResume}
                width="100%"
                height="100%"
                type="application/pdf"
              />
              <a href={myResume}>Download</a>
            </div>
          </section>
          <section className="techStack">
            <h2>MY TECHSTACK</h2>
            <div className="scrollStack">
              <div className="stackLogos">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />
                <img src={nodeSVG}/>
                <img src={sassSVG} />
                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={web3SVG}/>
                <img src={viteSVG} />
                <img src={netlifySVG} />
                <img src ={javaSvg}/>
              </div>
              <div className="stackLogos" aria-hidden="true">
              <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />
                <img src={nodeSVG}/>
                <img src={sassSVG} />
                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={web3SVG}/>
                <img src={viteSVG} />
                <img src={netlifySVG} />
                <img src ={javaSvg}/>
              </div>
            </div>
          </section>
        </ParallaxLayer>
        {/* Projects Section */}
        <ParallaxLayer offset={window.innerWidth < 768 ? 2.5 : 2.25}>
          <section className="projectSection">
            <h2>PROJECTS</h2>
            <Projects />
          </section>
        </ParallaxLayer>
        {/* Contact Section */}
        <ParallaxLayer
          offset={3}
          speed={window.innerWidth < 768 ? 2 : 1}
          style={{ backgroundColor: "var(--body_background)" }}
        >
          <Lottie className="lottieEmail" animationData={emailSVG} />
          <section className="contactSection">
            <h2>LETS WORK</h2>
            <div className="formContainer">
            <form
                netlify
                name="contact"
                method="POST"
                onSubmit={handleSubmit}
                className="contactForm"
              >
                <input type="hidden" name="form-name" value="contact" />

                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </label>

                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  ></textarea>
                </label>

                <button
                  type="submit"
                  style={{
                    backgroundColor: submitted ? "black" : "var(--primary-color)",
                    color: submitted ? "white" : "white",
                  }} 
                >
                  {submitted ? "Submit" : "Submit"}
                </button>
              </form>
            </div> 
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
