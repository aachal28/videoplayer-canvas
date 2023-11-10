// VideoInput.js
import React from "react";

const VideoInput = ({ handleFileChange }) => {
  return (
    <form>
      <input type="file" onChange={handleFileChange} />
    </form>
  );
};

export default VideoInput;
