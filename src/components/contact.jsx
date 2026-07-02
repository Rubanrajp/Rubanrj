import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./styles/contact.css";

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_clksvin",
                "template_we97m55",
                form.current,
            )
            .then(
                () => {
                    setStatus("Message sent successfully ✅");
                    form.current.reset();
                },
                () => {
                    setStatus("Failed to send message ❌");
                }
            );
    };

    return (
        <section className="contact" id="contact">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Me
            </motion.h2>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />

                <button type="submit">Send Message</button>
            </form>

            {status && <p className="status">{status}</p>}
        </section>
    );
}

export default Contact;