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
      <div
        className="App container bg-dark"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <video
          width="750"
          height="500"
          controls
          autoPlay
          onEnded={handleVideoEnded}
          key={number}
        >
          <source src={`/public/level1/vid${number}.mp4`} type="video/mp4" />
        </video>
        <div className="m-5 p-5">
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
      </div>
      <div className="">
        {(number === 3 || number === 6 || number === 9) && (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Question {currentQuestion}: are you gay?
            </h1>
            <div className="d-flex justify-content-center">
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
          </div>
        )}
        <div className="d-flex justify-content-center">
          <h1 className="text-center">Your Score: {score}</h1>
        </div>
      </div>
    </>
  );
}

export default Games;
