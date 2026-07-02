import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Particlesbackground from "./components/particles";
import About from "./components/about";
import Bg from "./components/bg";
import Skills from "./components/skills";
import Experience from "./components/exp";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>
    <Navbar />
    <Hero />
    <Bg />
      <Particlesbackground />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />


    <section id="home">
      <div className="container">
        <h1 className="title">
          Welcome to <span className="highlight">Ruban Raj</span>'s Portfolio
        </h1>

        <div
            className="glass"
            style={{ padding: "40px", textAlign: "center" }}
        >
          <p>Portfolio Loaded Successfully 🚀</p>

          <br />

          <button className="btn">Explore</button>
        </div>
      </div>
    </section>
  </>;
}

export default App;