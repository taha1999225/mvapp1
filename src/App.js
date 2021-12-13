import { useState } from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import MovieAdd from "./components/MovieAdd";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Game of thrones",
      description:
        "Game of Thrones, est une série télévisée américaine de fantaisie médiévale développée par David Benioff et D. B. ... Elle est basée sur la saga Le Trône de fer (A Song of Ice and Fire), une série de romans écrits par George R.R. Martin depuis 1996.y",
      posterUrl:
        "https://www.igeeksblog.com/wp-content/uploads/2021/03/Game-of-Thrones-Season-8-iPhone-Wallpaper.jpg",
      rate: "3",
      Trailer: "https://www.youtube.com/watch?v=Kd82bSBDE84",
    },
    {
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
      Trailer: "https://www.youtube.com/watch?v=Kd82bSBDE84",
    },
    {
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
      Trailer: "https://www.youtube.com/watch?v=Kd82bSBDE84",
    },
    {
      title: "Free guy",
      description:
        "Dans le jeu vidéo Free City, Guy est un personnage non-joueur employé dans une banque. Sa vie est réglée et il fait chaque jour la même chose, encore et encore.",
      posterUrl: "https://i.ytimg.com/vi/N2R2bjxjcS0/movieposter_en.jpg",
      rate: "3.5",
      Trailer: "https://www.youtube.com/watch?v=Kd82bSBDE84",
    },
    {
      title: "Adam's family ",
      description:
        "La Famille Addams, une famille de personnages de cartoons (dessins humoristiques) de Charles Addams publiés à partir de 1938 dans le magazine américain The New Yorker et repris dans de très nombreux recueils.",
      posterUrl:
        "https://www.miconcinemas.com/media/1712/webtheaddamsfamily2_payoffposter_resizewidth-800.jpg",
      rate: "4",
      Trailer: "https://www.youtube.com/watch?v=Kd82bSBDE84",
    },
  ]);
  const handleAdd = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DT" component={Dt} />
        </Switch>
        <MovieAdd handleAdd={handleAdd} />
        <MovieList movies={movies} />
      </div>
    </Router>
  );
}

export default App;
