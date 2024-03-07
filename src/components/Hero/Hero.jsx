import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <article>
        <h2>Project </h2>
        <h3>Lorum</h3>
      </article>

      <div>
        <Link className="button-white">
          View Project <img src="/img/arrow.png" alt="" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
