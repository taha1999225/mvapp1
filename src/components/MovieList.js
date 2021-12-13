import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const [text, settext] = useState("");
  return (
    <div>
      <Filter settext={settext} />
      <div className="list">
        {movies
          .filter((el) =>
            el.title.toLowerCase().includes(text.toLocaleLowerCase())
          )
          .map((el) => (
            <MovieCard movies={el} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
