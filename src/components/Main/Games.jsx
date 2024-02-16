import React, { useState } from "react";


function Games() {
  return (
    <>
      <div className="App">
        <video width="750" height="500" controls>
          <source src={`/public/level1/vid${number}.mp4`} type="video/mp4" />
        </video>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrev}>Previous</button>
      </div>
    </>
  );
}

export default Games;
