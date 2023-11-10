import React, { useRef } from "react";

const VideoPlayer = ({ videoRef, togglePlayPause, isPlaying }) => {
  return (
    <div className="main-container">
      <div className="videoPlayerContainer">
        <video ref={videoRef} className="videoPlayer" />
        <button
          onClick={togglePlayPause}
          className="playPauseButton"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
