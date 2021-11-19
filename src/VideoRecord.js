import React, { useCallback, useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import ResumableJs from "./Resumable";

const VideoRecord = (props) => {
  const [video, setVideo] = useState();

  const [dataUpload, setDataUpload] = useState();

  const refUpload = React.createRef(null);
  const onStopVideo = (blobUrl, blob) => {
    console.log(`%c blob`, "color: blue; font-weight: 600", blob);
    setVideo(blob);
  };

  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ video: true, onStop: onStopVideo });
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

  useEffect(() => {
    if (video) {
      video.name = "video.mov";
      refUpload?.current?.addFile(video);
    }
  }, [video, refUpload]);

  const onUploadComplete = useCallback((data) => {
    setDataUpload(data);
    setVideo(null);
  }, []);

  return (
    <div>
      Video
      <p style={{ marginLeft: 20 }}>{status}</p>
      <p style={{ marginLeft: 20 }}>{error}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video ref={videoRef} width={200} height={200} autoPlay />
      <video src={mediaBlobUrl} width={200} height={200} controls />
      <ResumableJs
        ref={refUpload}
        onFileAdded={video}
        onUploadComplete={onUploadComplete}
      />
      <a href={dataUpload?.videoUrl}>{dataUpload?.videoUrl}</a>
    </div>
  );
};

export default React.memo(VideoRecord);
