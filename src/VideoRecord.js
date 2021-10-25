import React, { useEffect, useRef } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const VideoRecord = (props) => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const videoRef = useRef(null);

  useEffect(() => {
    console.log(`%c status`, "color: blue; font-weight: 600", status);
    if (status === "recording") {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          videoRef.current && (videoRef.current.srcObject = stream);
        });
    } else if (status === "stopped") {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          videoRef.current && (videoRef.current.srcObject = null);
        });
    }
  }, [status]);

  return (
    <div>
      Video
      <p style={{ marginLeft: 20 }}>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video ref={videoRef} width={200} height={200} autoPlay />
      <video src={mediaBlobUrl} width={200} height={200} controls />
    </div>
  );
};

export default React.memo(VideoRecord);
