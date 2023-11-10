import React from "react";

const Waveform = ({ canvasRef }) => {
  return (

      <div className="waveform-container">
        <div ref={canvasRef} className="waveform-canvas" />
      </div>

  );
};

export default Waveform;

