import React, { useState } from "react";

function Games() {
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0); // Initialize currentQuestion to 0
  const [questions, setQuestions] = useState([
    "Maya's curiosity and imagination led her to be a quiet and reserved child.",
    "Maya's questions were often dismissed by adults, who believed she was too young to understand.",
    "Maya decided to stay silent and not voice her opinions after facing rejection from adults.",
    "Maya spoke up during a village meeting, sharing her ideas about building a playground and protecting the forest.",
    "The villagers were unsupportive of Maya's ideas and did not take any action after the village meeting.",
    "The once barren land where Maya suggested building a playground remained untouched and unused.",
    "Maya's determination and vision led to the successful construction of a playground in the village.",
    "After the playground was built, Maya's voice was disregarded once again, and she was never consulted on village matters.",
    "Maya's actions earned her the nickname 'Voice of the Village' due to her impactful contributions.",
    "The story teaches the importance of children advocating for their beliefs and the significance of every individual's voice.",
  ]);

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  const handleVideoEnded = () => {
    setNumber((prevNumber) => (prevNumber === 15 ? 1 : prevNumber + 1)); // Reset to 1 if number reaches 15
    setCurrentQuestion(0); // Reset currentQuestion to 0 when video changes
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setNumber((prevNumber) => (prevNumber === 15 ? 1 : prevNumber + 1)); // Reset to 1 if number reaches 15
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
            disabled={currentQuestion === 0}
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
      <div className="bg-red">
        <div>
          <h1 style={{ textAlign: "center" }}>
            Question {currentQuestion + 1}: {questions[currentQuestion]}{" "}
            {/* Display current question */}
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
        <div className="d-flex justify-content-center">
          <h1 className="text-center">Your Score: {score}</h1>
        </div>
      </div>
    </>
  );
}

export default Games;
