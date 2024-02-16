import React, { useState, useRef } from "react";

function Games() {
  const [number, setNumber] = useState(1);
  const videoRef = useRef(null);

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

  return (
    <>
      <div className="App">
        <video
          ref={videoRef}
          width="750"
          height="500"
          controls
          onEnded={handleVideoEnded}
        >
          <source
            src={`/level1/vid${number}.mp4`}
            type="video/mp4"
          />
        </video>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrev} disabled={number === 1}>Previous</button>
      </div>
    </>
  );
}

export default Games;
