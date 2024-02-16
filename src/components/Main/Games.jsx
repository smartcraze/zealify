import React, { useState } from "react";

function Games() {
  const [Reward, setReward] = useState(0);
  const [number, setNumber] = useState(1);
  const [right, setRight] = useState(null);

  const handlePrev = () => {
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const handleNext = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleVideoEnded = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const handleTrue = () => {
    setRight(true); // Set the right state to true
    setReward((prevReward) => prevReward + 1); // Increment the reward
  };
  const handleFalse = () => {
    setRight(false); 
    setReward((prevReward) => prevReward - 1);
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
          key={number} // Add a unique key to force reload the video element
        >
          <source src={`/public/level1/vid${number}.mp4`} type="video/mp4" />
        </video>
       
        <button
          onClick={handlePrev}
          disabled={number === 1}
          type="button"
          class="btn btn-warning"
        >
          Previous
        </button>
        <button type="button" class="btn btn-success " onClick={handleNext}>
          Next
        </button>
      </div>
      <div>
        <p>
          is suraj intelligent?
        </p>
      <button type="button" class="btn btn-success " onClick={handleTrue} >
          True
        </button>
      <button type="button" class="btn btn-success " onClick={handleFalse}>
          False
        </button>
        <p>
          Your Points is {Reward} : 
        </p>
      </div>
    </>
  );
}

export default Games;
