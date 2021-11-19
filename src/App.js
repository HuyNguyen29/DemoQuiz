import "./App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import autosize from "autosize";
import { useCallback, useEffect, useRef, useState } from "react";
import SelectQuestionComponent from "./selectQuestionComponent/SelectQuestionComponent";
import SelectQuestionContainer from "./selectQuestionComponent/SelectQuestionContainer";
import AudioRecord from "./AudioRecord";
import VideoRecord from "./VideoRecord";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useReactMediaRecorder } from "react-media-recorder";

const tmpNull = { question: "", answer: [{ option: "" }], img: "" };

function App() {
  const ref = useRef(null);
  const refListQuestion = useRef(null);
  const [data, setData] = useState([
    { question: "", answer: [{ option: "" }], img: "" },
  ]);
  const [show, setShow] = useState(true);

  const [selected, setSelected] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    const tmp = JSON.parse(localStorage.getItem("data"));
    if (tmp && tmp?.length !== 0) {
      setData(tmp);
    } else {
      setData([{ question: "", answer: [{ option: "" }], img: "" }]);
    }
  }, []);

  useEffect(() => {
    autosize(ref.current);
  });

  const setSelectQuestion = useCallback((index) => {
    setSelected(index);
  }, []);

  const onAddClicked = useCallback(() => {
    const add = { question: "", answer: [{ option: "" }], img: "" };
    const tmp = [...data];
    tmp.push(add);
    setData(tmp);
    localStorage.setItem("data", JSON.stringify(tmp));
    setSelected(tmp.length - 1);
    setTimeout(() => {
      refListQuestion.current.scrollToBottom();
    }, 200);
  }, [data]);

  const onDeleteClicked = useCallback(
    (close) => {
      let tmp = [...data];
      tmp.splice(selected, 1);
      if (tmp?.length === 0) {
        tmp = [{ question: "", answer: [{ option: "" }], img: "" }];
        setData(tmp);
        localStorage.setItem("data", JSON.stringify(tmp));
      } else {
        setData(tmp);
        localStorage.setItem("data", JSON.stringify(tmp));
      }
      close();
    },
    [selected, data]
  );

  const onChangeQuestion = useCallback(
    (event) => {
      const tmp = [...data];
      tmp[selected].question = event.nativeEvent.target.value;
      setData(tmp);
      localStorage.setItem("data", JSON.stringify(tmp));
    },
    [data, selected]
  );

  const onChangeAnswer = useCallback(
    (event) => {
      const tmp = [...data];
      tmp[selected].answer[selectedOption].option =
        event.nativeEvent.target.value;
      setData(tmp);
      localStorage.setItem("data", JSON.stringify(tmp));
    },
    [data, selected, selectedOption]
  );

  const onAddAnswer = useCallback(() => {
    const tmp = [...data];
    if (tmp[selected].answer.length < 6) {
      const add = { option: "" };
      tmp[selected].answer.push(add);
      setData(tmp);
      localStorage.setItem("data", JSON.stringify(tmp));
    }
  }, [data, selected]);

  const onDeleteAnswer = useCallback(() => {
    const tmp = [...data];
    tmp[selected].answer.splice(selectedOption, 1);
    setData(tmp);
    localStorage.setItem("data", JSON.stringify(tmp));
  }, [data, selected, selectedOption]);

  const setOption = useCallback((index) => {
    setSelectedOption(index);
  }, []);

  const onDeleteImg = useCallback(() => {
    const tmp = [...data];
    tmp[selected].img = null;
    setData(tmp);
    localStorage.setItem("data", JSON.stringify(tmp));
  }, [data, selected, selectedOption]);

  const onAddImg = useCallback(
    (img) => {
      const tmp = [...data];
      tmp[selected].img = img;
      setData(tmp);
      localStorage.setItem("data", JSON.stringify(tmp));
    },
    [data, selected, selectedOption]
  );

  const handleOnBackToQuetionList = () => {
    setSelected(0);
  };

  // useEffect(() => {
  //   const tmp = JSON.parse(localStorage.getItem("video"));
  //   console.log(`%c tmp`, "color: blue; font-weight: 600", tmp);
  // }, []);

  const { status, startRecording, stopRecording, mediaBlobUrl, error } =
    useReactMediaRecorder({ video: true });

  console.log(`%c mediaBlobUrl`, "color: blue; font-weight: 600", mediaBlobUrl);

  return (
    <Container fluid className="p-0">
      <Col>
        <Row>
          {/* <Col>
            <AudioRecord />
          </Col> */}
          <Col>
            <VideoRecord />
          </Col>
        </Row>
        <Row></Row>
      </Col>
      <div></div>
    </Container>
  );
}

export default App;
