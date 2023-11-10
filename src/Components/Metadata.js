// Metadata.js
import React from "react";

const Metadata = ({ videoMetadata }) => {
  return (
    <div style={{ flex: 1, marginLeft: "10px" }}>
      <h3>Video Metadata</h3>
      <p>Name: {videoMetadata.name}</p>
      <p>Type: {videoMetadata.type}</p>
      <p>Size: {videoMetadata.size} bytes</p>
      <p>Last Modified: {new Date(videoMetadata.lastModified).toLocaleString()}</p>
      <p>Duration: {videoMetadata.duration.toFixed(2)} seconds</p>
    </div>
  );
};

export default Metadata;
