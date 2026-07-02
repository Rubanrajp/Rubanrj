import { motion } from "framer-motion";
import "./styles/about.css";

import {
    FaDatabase,
    FaLaptopCode,
    FaBriefcase
} from "react-icons/fa";

function About() {
    return (
        <section className="about" id="about">

            <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <p className="about-text">
                    I'm <strong>Ruban Raj</strong>, a passionate SQL Developer and
                    Full Stack Developer with hands-on experience in building
                    responsive web applications using React, Django, MySQL,
                    and SQL Server.

                    I enjoy designing efficient databases, developing secure APIs,
                    and creating modern user interfaces that solve real-world problems.
                </p>

                <div className="about-cards">

                    <div className="about-card">

                        <FaDatabase className="about-icon"/>

                        <h3>Database</h3>

                        <p>
                            SQL Server, MySQL,
                            Database Design,
                            Query Optimization,
                            Stored Procedures
                        </p>

                    </div>

                    <div className="about-card">

                        <FaLaptopCode className="about-icon"/>

                        <h3>Development</h3>

                        <p>
                            React,
                            Django,
                            REST API,
                            HTML,
                            CSS,
                            JavaScript
                        </p>

                    </div>

                    <div className="about-card">

                        <FaBriefcase className="about-icon"/>

                        <h3>Projects</h3>

                        <p>
                            Job Portal,
                            E-Commerce,
                            Portfolio,
                            Database Systems
                        </p>

                    </div>

                </div>

            </motion.div>

        </section>
    );
}

export default About;