import Button from "@restart/ui/esm/Button";
import { Modal } from "bootstrap";
import React, { useState } from "react";
require("react-bootstrap/ModalHeader");

const MovieAdd = ({ handleAdd }) => {
  const [show, setshow] = useState(false);
  const [nmovies, setnmovies] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });
  return (
    <div className="addmovie">
      <nav onClick={() => setshow(!show)}>
        <ul>
          <li>
            ADD
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </nav>
      {show ? (
        <div className="modalbg">
          <div className="modalbody">
            <div class="close-container" onClick={() => setshow(!show)}>
              <div class="leftright"></div>
              <div class="rightleft"></div>
              <label class="close">close</label>
            </div>
            <input
              type="text"
              placeholder="Movie name"
              onChange={(e) =>
                setnmovies({ ...nmovies, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Movie description"
              onChange={(e) =>
                setnmovies({ ...nmovies, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Movie image"
              onChange={(e) =>
                setnmovies({ ...nmovies, posterUrl: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Movie rate"
              onChange={(e) =>
                setnmovies({ ...nmovies, rating: e.target.value })
              }
            />
            <nav onClick={() => handleAdd(nmovies)}>
              <ul>
                <li>
                  Add movie
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieAdd;
