import "./Header.css";
import Logo from "../../assets/svg/Logo.jsx";
import { Link, NavLink } from "react-router-dom";
import Moon from "../../assets/svg/Moon.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../context/Context";

const Header = () => {
  // * Context:
  const { theme, setTheme } = useContext(ThemeContext);

  // * Funktion, um state vom Theme zu ändern:
  const changeTheme = () => {
    setTheme((darklight) => !darklight);
    // console.log("funk läuft");
  };

  return (
    <header>
      <Link className="logo">
        <Logo />
      </Link>
      <article>
        <nav>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/projects">Certifications</NavLink>
          <NavLink to="/projects">Contacts</NavLink>
        </nav>
        {/* //* onclick-Funktion auf svg: */}
        <div onClick={changeTheme}>
          <Moon />
        </div>
      </article>
    </header>
  );
};

export default Header;
