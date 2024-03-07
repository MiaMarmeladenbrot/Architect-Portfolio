import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Loadingpage from "./pages/Loadingpage/Loadingpage";

// * Context-Importe:
import { LoadingContext } from "./context/Context";
import { ThemeContext } from "./context/Context";
import Gallery from "./pages/Gallery/Gallery";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  // * State für Loading-Context:
  const [loading, setLoading] = useState(false);

  // * State für Theme-Context:
  const [theme, setTheme] = useState(false);

  return (
    <section className={theme ? "dark" : ""}>
      {/* //* Provider */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {/* // * Ternary-Abfrage, ob loading-state auf true oder false steht: */}
          {loading ? (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          ) : (
            <Loadingpage />
          )}
        </LoadingContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
