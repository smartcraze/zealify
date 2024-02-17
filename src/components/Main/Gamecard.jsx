import React from "react";
import Games from "./Games";
import { Link } from "react-router-dom";

function Gamecard() {
  return (
    <>
      {/* game1 */}
      <div className="d-flex flex-wrap justify-content-around ">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="public\poster-game.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">SpellBee</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* Replaced <a> tag with <Link> component */}
            <Link to="/play" className="btn btn-primary">
              Play Now
            </Link>
          </div>
        </div>

        {/* card2 game 2 */}
        <div className="card" style={{ width: "18rem" }}>
          <img src="public\tictac.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tic-Tac-Toe</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="sandbox.html"
              className="btn btn-primary "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Play Nicely
            </a>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="d-flex flex-wrap justify-content-around ">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="public\poster-game.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Quiz</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* Replaced <a> tag with <Link> component */}
            <Link to="/playQuiz" className="btn btn-primary">
              Play Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gamecard;
