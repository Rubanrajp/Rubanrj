import "./styles/skills.css";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Node.js", level: 70 },
];

function Skills() {
    return (
        <section className="skills" id="skills">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Skills
            </motion.h2>

            <div className="skills-container">
                {skills.map((skill, index) => (
                    <motion.div
                        className="skill-card"
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="skill-header">
                            <h3>{skill.name}</h3>
                            <span>{skill.level}%</span>
                        </div>

                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;