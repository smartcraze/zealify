import React from 'react';
import { Link } from 'react-router-dom';

const Lawcard = (props) => {
  const { imageUrl, title, text, buttonText, buttonLink } = props;

  return (
    <div className="card" style={{ width: "18rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px", transition: "transform 0.3s ease", ":hover": { transform: "scale(1.5)" } }}>
      <img className="card-img-top" src={imageUrl} alt="Card image cap" style={{ borderRadius: "10px 10px 0 0" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
       
      </div>
    </div>
  );
};

export default Lawcard;
