import { motion } from "framer-motion";
import "./styles/hero.css";
import profile from "../assets/Profile.jpeg";

import { Typewriter } from "react-simple-typewriter";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

function Hero() {
    return (
        <section className="hero" id="home">

            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <h3>Hello, I'm</h3>

                <h1>Ruban Raj</h1>

                <h2>
          <span className="typing">
            <Typewriter
                words={[
                    "SQL Developer",
                    "Database Engineer",
                    "React Developer",
                    "Full Stack Developer"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
            />
          </span>
                </h2>

                <p>
                    Passionate Full Stack Developer specializing in
                    React, Django, MySQL and SQL Server.
                    I enjoy building modern, scalable web applications
                    with clean UI and efficient backend systems.
                </p>

                <div className="hero-buttons">
                    <a
                        href="/Ruban_Raj.docx"
                        className="btn"
                        download
                    >
                        Download Resume
                    </a>

                    <a
                        href="#"
                        className="btn outline"
                    >
                        Contact Me
                    </a>
                </div>

                <div className="social-icons">
                    <a
                        href="https://github.com/Rubanrajp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub/>
                    </a>
                    <a
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin /></a>
                    <a
                        href="mailto:rubanrj03@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaEnvelope /></a>
                </div>

                <div className="stats">

                    <div className="stat-card">
                        <h2>2+</h2>
                        <span>Projects</span>
                    </div>

                    <div className="stat-card">
                        <h2>10+</h2>
                        <span>Technologies</span>
                    </div>

                    <div className="stat-card">
                        <h2>100%</h2>
                        <span>Passion</span>
                    </div>

                </div>

            </motion.div>

            <motion.div
                className="hero-right"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <div className="image-box">
                    <img src={profile} alt="Ruban Raj" />
                </div>

            </motion.div>

        </section>
    );
}

export default Hero;