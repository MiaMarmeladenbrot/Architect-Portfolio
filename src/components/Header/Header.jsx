import "./Header.css";
import Logo from "../../assets/svg/Logo.jsx";
import LogoWhite from "../../assets/svg/LogoWhite.jsx";
import Moon from "../../assets/svg/Moon.jsx";
import Sun from "../../assets/svg/Sun.jsx";
import { Link, NavLink } from "react-router-dom";
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

  // console.log(theme);

  return (
    <header>
      <Link to="/">
        {/* //* ternary, um weißes oder schwarzes Logo auszugeben: */}
        {theme ? <LogoWhite /> : <Logo />}
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
          {/* //* Ternary um Sonne oder Mond auszugeben: */}
          {theme ? <Sun /> : <Moon />}
        </div>
      </article>
    </header>
  );
};

export default Header;
