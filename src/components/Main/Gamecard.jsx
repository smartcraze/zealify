import React from "react";
import Games from "./Games";
import { Link } from "react-router-dom";

function Gamecard() {
  return (
    <>
      {/* Existing games */}
      <div className="d-flex flex-wrap justify-content-around" style={{backgroundColor:"orange"}}>
        <div className="card mb-3" style={{ width: "18rem" }}>
          <img
            src="\poster-game.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Right to say & Be heard</h5>
            <Link to="/play" className="btn btn-primary align-self-center">
              Play Now
            </Link>
          </div>
        </div>

        <div className="card mb-3" style={{ width: "18rem" }}>
          <img src="\tictac.jpg" className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Creativity</h5>
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
            src="\Quizeposter.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Quiz Game Based on Law</h5>
            <Link to="/playQuiz" className="btn btn-primary align-self-center">
              Play Now
            </Link>
          </div>
        </div>
      </div>

      {/* Developing phase games */}
      {/* <h1 className="container " style={{textAlign:"center"}}> Developing phase</h1> */}
      <div className="d-flex flex-wrap justify-content-around" style={{backgroundColor:"lightblue"}}>
        <div className="card mb-3" style={{ width: "18rem" }}>
          <img
            src=" \game1.jpg"
            className="card-img-top"
            alt="Game in development"
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Right to development</h5>
            <p className="card-text">In Development</p>
          </div>
        </div>

        <div className="card mb-3" style={{ width: "18rem" }}>
          <img
            src=" \game2.jpg"
            className="card-img-top"
            alt="Game in development"
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Right to Health</h5>
            <p className="card-text">In Development</p>
          </div>
        </div>

        <div className="card mb-3" style={{ width: "18rem" }}>
          <img
            src=" \game3.jpg"
            className="card-img-top"
            alt="Game in development"
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">Right to Equality</h5>
            <p className="card-text">In Development</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gamecard;
