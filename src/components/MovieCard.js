import React from "react";
import MovieList from "./MovieList";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movies }) => {
  return (
    <div>
      <div className="container">
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu"></div>
            <img className="movie-img" src={movies.posterUrl} />
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{movies.title}</h1>
                  <ul className="movie-gen"></ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>SUMMARY</h5>
                </div>
                <div className="col2"></div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description">{movies.description} </p>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1"></div>
              </div>
              <ReactStars
                value={movies.rate}
                edit={false}
                count={5}
                size={24}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
