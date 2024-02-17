import React from 'react';
import { Link } from 'react-router-dom';

const Lawcard = (props) => {
  const { imageUrl, title, text, buttonText, buttonLink } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {/* <Link to={buttonLink} className="btn btn-primary">{buttonText}</Link> */}
      </div>
    </div>
  );
};

export default Lawcard;




// <Card 
// imageUrl="..." 
// title="Card 1 Title" 
// text="Some quick example text for Card 1." 
// buttonText="Go to Page 1" 
// buttonLink="/page1" 
// />