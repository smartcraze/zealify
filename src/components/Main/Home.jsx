import React, { useState } from "react";
import Lawcard from "../Cards/Lawcard";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        style={{ height: "70vh" ,
           backgroundColor:"red"                               }}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
            <img
              src="public\bg3.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
            <img
              src="public\bg2.jpg"
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
            <img
              src="public\img1.jpg"
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="Container">
        <h1 className="container text-purple" style={{ textAlign: "center" }}>
          Laws of Child
        </h1>
      </div>
      {/* cards  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          backgroundColor: "#ebcfa0",
        }}
      >
        <Lawcard
          imageUrl="public\law1.jpg"
          title="Right to Education"
          text="Children have the right to an education. School is
          a great place for children to learn about their
          world, and decide how they might want to change
          it, so that it’s better for everybody.."
          buttonLink="/page1"
        />
        <Lawcard
          imageUrl="public\law1.jpg"
          title="Right to Education"
          text="Children have the right to an education. School is
          a great place for children to learn about their
          world, and decide how they might want to change
          it, so that it’s better for everybody.."
          buttonLink="/page1"
        />
        <Lawcard
          imageUrl="public\law1.jpg"
          title="Right to Education"
          text="Children have the right to an education. School is
          a great place for children to learn about their
          world, and decide how they might want to change
          it, so that it’s better for everybody.."
          buttonLink="/page1"
        />
        <Lawcard
          imageUrl="public\law1.jpg"
          title="Right to Education"
          text="Children have the right to an education. School is
          a great place for children to learn about their
          world, and decide how they might want to change
          it, so that it’s better for everybody.."
          buttonLink="/page1"
        />
      </div>
    </>
  );
};

export default Home;
