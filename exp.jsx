import { motion } from "framer-motion";
import "./styles/exp.css";

const experiences = [
    {
        company: "The Stackly",
        role: "SQL Developer",
        duration: "Feb/02/2026 - Present",
        description:
            "Worked on SQL Server, MySQL, query optimization, stored procedures, and database design."
    },
    {
        company: "Job-Portal",
        role: "SQL Developer",
        duration: "2026 - Present",
        description:
            "Built Job Portal, E-Commerce website, Portfolio, and REST APIs using React, and MySQL."
    }
];

function Experience() {
    return (
        <section className="experience" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">
                    My <span>Experience</span>
                </h2>

                <div className="timeline">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-dot"></div>

                            <div className="timeline-content">
                                <h3>{item.role}</h3>
                                <h4>{item.company}</h4>
                                <span>{item.duration}</span>

                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Experience;