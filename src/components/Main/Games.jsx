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

  const handleTrue = () => {
    setScore((prevScore) => prevScore + 1);
    handleNext();
  };

  const handleFalse = () => {
    setScore((prevScore) => prevScore - 1);
    handleNext();
  };

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
        {(number === 3 || number === 6 || number === 9) && (
          <div>
            <p>Question {currentQuestion}: are you gay?</p>
            <button
              onClick={handleTrue}
              type="button"
              className="btn btn-success"
            >
              True
            </button>
            <button
              onClick={handleFalse}
              type="button"
              className="btn btn-danger"
            >
              False
            </button>
          </div>
        )}

        <p>Your Score: {score}</p>
      </div>
    </>
  );
}

export default Games;
