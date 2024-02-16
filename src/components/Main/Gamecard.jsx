import React from 'react'
import Games from './Games'
import { Link } from "react-router-dom";

function Gamecard() {
  return (
    <>
    {/* game1 */}
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {/* Replaced <a> tag with <Link> component */}
        <Link to="/play" className="btn btn-primary">Play Now </Link>
      </div>
    </div>

    </>
  )
}

export default Gamecard
