import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <article>
          <img src="/img/logo2.png" alt="" />
        </article>
        <article>
          <h5>Information</h5>
          <Link to="/">Main</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/projects">Projects</Link>
          <Link to="#">Contacts</Link>
        </article>
        <article>
          <h5>Contacts</h5>
          <div>
            <img src="/img/location.png" alt="" />
            <p>1234 Sample Street Austin Texas 78704</p>
          </div>
          <div>
            <img src="/img/phone.png" alt="" />
            <p>512.333.2222</p>
          </div>
          <div>
            <img src="/img/mail.png" alt="" />
            <p>sampleemail@gmail.com</p>
          </div>
        </article>
        <article>
          <h5>Social Media</h5>
          <div>
            <img src="/img/facebook.png" alt="" />
            <img src="/img/twitter.png" alt="" />
            <img src="/img/linkedin.png" alt="" />
            <img src="/img/pinterest.png" alt="" />
          </div>
        </article>
      </section>
      <p className="copyright">© 2019 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
