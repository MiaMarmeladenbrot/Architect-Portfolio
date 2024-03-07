import { useContext } from "react";
import "./Contact.css";
import { ThemeContext } from "../../context/Context";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <article>
        <form>
          <input type="text" placeholder="Name" />
          <input type="tel" required placeholder="Phone Number*" />
          <input type="mail" required placeholder="E-mail*" />
          <input type="text" placeholder="Interested in" />
          <textarea
            required
            name=""
            id=""
            cols="30"
            rows="11"
            placeholder="Message*"
          ></textarea>{" "}
          <button type="submit" className="button-black">
            send email{" "}
            {theme ? (
              <img src="/img/arrow.png" alt="" />
            ) : (
              <img src="/img/arrow-white.png" alt="" />
            )}
          </button>
        </form>
        <img src="/img/contact.png" alt="" />
      </article>
    </section>
  );
};

export default Contact;
