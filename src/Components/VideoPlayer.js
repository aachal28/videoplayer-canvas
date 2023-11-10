import React, { useRef } from "react";

const VideoPlayer = ({ videoRef, togglePlayPause, isPlaying }) => {
  return (
    <div className="videoPlayerContainer">
      <video ref={videoRef} className="videoPlayer" />
      <button onClick={togglePlayPause} className="playPauseButton">
        <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"} fa-xs fa-inverse`}></i>
      </button>
    </div>
  );
};

export default VideoPlayer;
