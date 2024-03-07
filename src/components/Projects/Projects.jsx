import { Link } from "react-router-dom";
import "./Projects.css";
import { ThemeContext } from "../../context/Context";
import { useContext } from "react";

const Projects = () => {
  // * Context:
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <section className="projects">
        <h2>Our Projects</h2>
        <article>
          <div>
            <h3>Sample Project</h3>
            <Link>
              View more <img src="/img/arrow-white.png" alt="" />
            </Link>
          </div>
          <img className="first" src="/img/project2.png" alt="" />
        </article>
        <article>
          <img src="/img/project3.png" alt="" />
          <img src="/img/project4.png" alt="" />
          <img src="/img/project5.png" alt="" />
        </article>
        <Link className="button-black">
          All Projects
          {theme ? (
            <img src="/img/arrow.png" alt="" />
          ) : (
            <img src="/img/arrow-white.png" alt="" />
          )}
        </Link>
      </section>
    </>
  );
};

export default Projects;
