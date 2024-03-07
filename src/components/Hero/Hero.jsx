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
          View Project <img src="../../../public/img/arrow.png" alt="" />
        </Link>
      </div>
      {/* <img src="../../../public/img/hero.png" alt="" /> */}
    </section>
  );
};

export default Hero;
