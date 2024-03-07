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
          <img src="/img/greybox.png" alt="grey Box" />
          <img src="/img/lighthouse1.jpeg" alt="Arkade" />
          <img src="/img/window.jpeg" alt="Window" />
          <img src="/img/lighthouse2.jpeg" alt="Leuchtturm auf Insel" />
          <img src="/img/tempel.jpeg" alt="Tempel" />
          <img src="/img/kirche.jpeg" alt="Arkade" />
          <img src="/img/tower.jpeg" alt="Arkade" />
          <img src="/img/arkade.jpeg" alt="Arkade" />
          <img src="/img/markus.jpeg" alt="Arkade" />
          <img src="/img/hochhaus.jpeg" alt="Arkade" />
        </article>
      </section>
    </section>
  );
};

export default Gallery;
