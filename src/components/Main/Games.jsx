import React, { useState } from "react";

function Games() {
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prevNumber) => prevNumber - 1);
    }
  };

  const handleVideoEnded = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleNext = () => {
    setCurrentQuestion((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1); 
  };
  // const handleTrue = ()=>{
  //   setRight=
  // };

  return (
    <>
      <div className="App">
        <video
          width="750"
          height="500"
          controls
          // autoPlay
          onEnded={handleVideoEnded}
          key={number}
        >
          <source
            src={`/public/level1/vid${number}.mp4`}
            type="video/mp4"
          />
        </video>
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 1}
          type="button"
          className="btn btn-warning"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="btn btn-success"
        >
          Next
        </button>
      </div>
      <div>
      <button type="button" class="btn btn-success " >
          True
        </button>
      <button type="button" class="btn btn-success " onClick={handleNext}>
          False
        </button>
        <p>
          Your Points is : 
        </p>
      </div>
    </>
  );
}

export default Games;
