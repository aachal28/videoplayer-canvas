// Waveform.js
import React from "react";

const Waveform = ({ canvasRef }) => {
  return (
    <div style={{ marginTop: "10px", width: "100%" }}>
      <h3>Waveform</h3>
      <div ref={canvasRef} style={{ width: "100%", height: "100px" }} />
    </div>
  );
};

export default Waveform;
