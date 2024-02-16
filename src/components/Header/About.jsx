import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <div
          class="spinner-border text-primary"
          style={{ alignContent: "center" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
     
      <Link className="nav-link" to="/games">Go to game</Link>
    </>
  );
}

export default About;
