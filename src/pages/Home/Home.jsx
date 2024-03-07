import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MainFocus from "../../components/MainFocus/MainFocus";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <section>
      <Header />
      <Hero />
      <About />
      <MainFocus />
      <Projects />
      <Contact />
    </section>
  );
};

export default Home;
