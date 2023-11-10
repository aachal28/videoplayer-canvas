import React from "react";

const Waveform = ({ canvasRef }) => {
  return (
    <div className="centered-container">
      <div className="waveform-container">
        <h3 className="waveform-title">Waveform</h3>
        <div ref={canvasRef} className="waveform-canvas" />
      </div>
    </div>
  );
};

export default Waveform;

