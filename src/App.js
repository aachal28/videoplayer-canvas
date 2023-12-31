import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer";
import VideoInput from "./Components/VideoInput";
import VideoPlayer from "./Components/VideoPlayer";
import Metadata from "./Components/Metadata";
import Waveform from "./Components/Waveform";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoMetadata, setVideoMetadata] = useState({
    name: "",
    type: "",
    size: 0,
    lastModified: 0,
    duration: 0,
  });

  const wavesurfer = useRef(null);

  const handleFileChange = (e) => {
    e.preventDefault();
    
    const file = e.target.files[0];
    const video = videoRef.current;
    const source = URL.createObjectURL(file);
    video.src = source;

    // Initialize WaveSurfer 
    wavesurfer.current = WaveSurfer.create({
      container: canvasRef.current,
      waveColor: "rgb(134, 43, 162)",
      progressColor: "rgb(100, 0, 100)",
      media: video,
      barWidth: 2,
      barGap: 1,
      barRadius: 2,
    });

    wavesurfer.current.load(source);
    console.log("file",file);
    // Extracting metadata
    setVideoMetadata({
      name: file.name,
      type: file.type,
      size: file.size,
      lastModified: file.lastModified,
      duration: video.duration,
    });
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        wavesurfer.current.pause();
      } else {
        video.play();
        wavesurfer.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoMetadata((prevMetadata) => ({
        ...prevMetadata,
        duration: video.duration,
      }));
    }
  }, [isPlaying]);

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <VideoInput handleFileChange={handleFileChange} />
      <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
        <VideoPlayer videoRef={videoRef} togglePlayPause={togglePlayPause} isPlaying={isPlaying} />
        <Metadata videoMetadata={videoMetadata} />
      </div>
      <Waveform canvasRef={canvasRef} />
    </div>
  );
}

export default App;
