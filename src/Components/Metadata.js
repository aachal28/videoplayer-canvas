import React from "react";

const Metadata = ({ videoMetadata }) => {
  return (
    // <div className="main-container">
      <div className="metadataContainer">
        <h2>Video Metadata</h2>
        <p>Name: {videoMetadata.name}</p>
        <p>Type: {videoMetadata.type}</p>
        <p>Size: {videoMetadata.size} bytes</p>
        <p>Last Modified: {new Date(videoMetadata.lastModified).toLocaleString()}</p>
        <p>Duration: {videoMetadata.duration.toFixed(2)} seconds</p>
        
      </div>
    // </div>
  );
};

export default Metadata;
