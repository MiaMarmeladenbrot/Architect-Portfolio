import "./Gallery.css";
import Header from "../../components/Header/Header";

const Gallery = () => {
  return (
    <section>
      <Header />
      <section className="gallery">
        <h2>Photo</h2>
        <h3>Gallery</h3>
        <article>
          <img src="../../../public/img/greybox.png" alt="grey Box" />
          <img src="../../../public/img/lighthouse1.jpeg" alt="Arkade" />
          <img src="../../../public/img/window.jpeg" alt="Window" />
          <img
            src="../../../public/img/lighthouse2.jpeg"
            alt="Leuchtturm auf Insel"
          />
          <img src="../../../public/img/tempel.jpeg" alt="Tempel" />
          <img src="../../../public/img/kirche.jpeg" alt="Arkade" />
          <img src="../../../public/img/tower.jpeg" alt="Arkade" />
          <img src="../../../public/img/arkade.jpeg" alt="Arkade" />
          <img src="../../../public/img/markus.jpeg" alt="Arkade" />
          <img src="../../../public/img/hochhaus.jpeg" alt="Arkade" />
        </article>
      </section>
    </section>
  );
};

export default Gallery;
