import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/Context";
import "./Loadingpage.css";

const Loadingpage = () => {
  // * useContext importieren:
  const { loading, setLoading } = useContext(LoadingContext);

  // * Funktion, um loading erst nach 2 Sekunden auf true zu stellen und so die Loadingpage 2 Sekunden lang anzuzeigen:
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <section className="loadingpage">
      <img src="../../../public/img/circle.png" alt="" />
      <h1>Welcome to our Site</h1>
    </section>
  );
};

export default Loadingpage;
