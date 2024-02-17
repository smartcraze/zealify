import React from "react";
import Games from "./Games";
import { Link } from "react-router-dom";

function Gamecard() {
  return (
    <>
      {/* game1 */}
      <div className="d-flex flex-wrap justify-content-around ">
        <div className="card mb-3" style={{ width: "18rem" }}>
          <img
            src="public\poster-game.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">SpellBee</h5>
            <Link to="/play" className="btn btn-primary align-self-center">
              Play Now
            </Link>
          </div>
        </div>

        {/* card2 game 2 */}
        <div className="card mb-3" style={{ width: "18rem" }}>
          <img src="public\tictac.jpg" className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Tic-Tac-Toe</h5>
            <a
              href="sandbox.html"
              className="btn btn-primary align-self-center"
            >
              Play Nicely
            </a>
          </div>
        </div>
        <div className="card mb-3" style={{ width: "18rem" }}>
          <img
            src="public\Quizeposter.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Quiz</h5>
            <Link to="/playQuiz" className="btn btn-primary align-self-center">
              Play Now
            </Link>
          </div>
        </div>
      </div>
      {/* card 3 */}
    </>
  );
}

export default Gamecard;
