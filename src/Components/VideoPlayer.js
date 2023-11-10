// VideoPlayer.js
import React, { useRef } from "react";

const VideoPlayer = ({ videoRef, togglePlayPause, isPlaying }) => {
  return (
    <div style={{ flex: 1, marginRight: "10px", position: "relative" }}>
      <video ref={videoRef} style={{ width: "100%", height: "auto" }} />
      <button
        onClick={togglePlayPause}
        style={{
          position: "absolute",
          zIndex: 2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default VideoPlayer;
