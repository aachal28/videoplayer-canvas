// VideoInput.js
import React, { useState } from "react";

const VideoInput = ({ handleFileChange }) => {
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName("Select Video");
      handleFileChange(e);
    }
  };

  return (
    <form>
      <label
        htmlFor="fileInput"
        className="fileInputLabel"
      >
        {selectedFileName || "Select Video"}
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileSelection}
        style={{ display: "none" }}
      />
    </form>
  );
};

export default VideoInput;
