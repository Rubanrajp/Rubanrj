import { motion } from "framer-motion";
import "./styles/projects.css";

const projects = [
    {
        title: "Job Portal",
        description:
            "A full-stack job portal with authentication, company management, candidate profiles, job applications, and MySQL database.",
        tech: ["React", "SQL Server", "MySQL"],
        github: "#",
        demo: "#",
    },
    {
        title: "E-Commerce",
        description:
            "Modern e-commerce platform featuring product catalog, shopping cart, secure authentication, and responsive UI.",
        tech: ["React", "MySQL"],
        github: "#",
        demo: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "A premium animated portfolio built with React, Framer Motion, and modern UI/UX principles.",
        tech: ["React", "CSS", "Framer Motion"],
        github: "#",
        demo: "#",
    },
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">
                    My <span>Projects</span>
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image">
                                <h3>{project.title}</h3>
                            </div>

                            <div className="project-content">
                                <p>{project.description}</p>

                                <div className="tech-stack">
                                    {project.tech.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-buttons">
                                    <a href={project.github}>GitHub</a>
                                    <a href={project.demo}>Live Demo</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;