import { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/App.scss";
import "./Styles/PageFilms.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MoovieCard from "./components/MoovieCard";
import FilmOfDay from "./components/FilmOfDay";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then(({ data }) => {
        setApi(data);
      })
      .catch(() => {
        console.error("erreur");
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="global-container">
        <FilmOfDay />
        <MoovieCard api={api} key={api.id} />
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
