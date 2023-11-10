import React from 'react'

// audioDetection.js
const audioDetection = async (videoRef, setPlaying, setMetadata) => {
    console.log('videoRef:', videoRef);
    console.log('setPlaying:', setPlaying);
    console.log('setMetadata:', setMetadata);


const file = videoRef.current?.files?.[0];
console.log('Selected File:', file);


    if (file) {
      const video = videoRef.current;
  
      // Check if the browser supports the MediaMetadata API
      if ('MediaMetadata' in window) {
        console.log('MediaMetadata API is supported');
        // Rest of the code...
      } else {
        console.log('MediaMetadata API is not supported');
        // Handle the lack of support if needed
      }
      

      const metadata = await video.getVideoTracks()[0].applyConstraints({});
console.log('Video Tracks:', video.getVideoTracks());
console.log('Metadata:', metadata);


if (!metadata || !metadata.length || !metadata[0].label.includes('audio')) {
    console.log('No audio detected in the selected video');
    alert('The selected video does not have audio. Please choose a video with audio.');
    return;
  }
  
  
      video.src = URL.createObjectURL(file);
      video.load();
      setMetadata({
        Name: file.name,
        Size: file.size,
        'Media Format': file.type,
        'Last Modified': new Date(file.lastModified),
      });
    }
  };
  
  
export default audioDetection
