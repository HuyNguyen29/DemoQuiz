import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const AudioRecord = (props) => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  return (
    <div>
      Audio
      <p style={{ marginLeft: 20 }}>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls />
    </div>
  );
};

export default React.memo(AudioRecord);
