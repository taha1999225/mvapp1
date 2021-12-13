import React from "react";
import ReactStars from "react-rating-stars-component";

const Filter = ({ settext }) => {
  return (
    <div className="search">
      <div>
        <input
          type="text"
          placeholder="Search for movie"
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <ReactStars edit={true} count={5} size={24} activeColor="#ffd700" />{" "}
    </div>
  );
};

export default Filter;
