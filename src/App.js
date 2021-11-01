import "./App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import autosize from "autosize";
import { useCallback, useEffect, useRef, useState } from "react";
import SelectQuestionComponent from "./selectQuestionComponent/SelectQuestionComponent";
import SelectQuestionContainer from "./selectQuestionComponent/SelectQuestionContainer";
import { useReactMediaRecorder } from "react-media-recorder";
import AudioRecord from "./AudioRecord";
import VideoRecord from "./VideoRecord";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const tmpNull = { question: "", answer: [{ option: "" }], img: "" };

function App() {
  const ref = useRef(null);
  const refListQuestion = useRef(null);
  const [data, setData] = useState([tmpNull]);
  const [show, setShow] = useState(true);

  const [selected, setSelected] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const {
    statusVideo,
    startRecordingVideo,
    stopRecordingVideo,
    mediaBlobUrlVideo,
  } = useReactMediaRecorder({ video: true });

  useEffect(() => {
    const tmp = JSON.parse(localStorage.getItem("data"));
    if (tmp && tmp?.length !== 0) {
      setData(tmp);
    } else {
      setData([tmpNull]);
    }
  }, []);

  useEffect(() => {
    autosize(ref.current);
  });

  const setSelectQuestion = useCallback((index) => {
    setSelected(index);
  }, []);

  const onAddClicked = useCallback(() => {
    const add = tmpNull;
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
        tmp = [tmpNull];
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

  return (
    <Container fluid className="p-0">
      <Col>
        <Row>
          <div
            className={`left-pane col-sm-4 ${
              selected ? "d-none d-md-block" : ""
            }`}
            style={{ backgroundColor: "rgb(0, 187, 255)" }}
          >
            <div className={"left-item"}>
              <h6 className={"txt-title"} style={{ paddingLeft: 20 }}>
                Select your questions
              </h6>
              <SelectQuestionComponent
                ref={refListQuestion}
                data={data}
                selected={selected}
                setSelected={setSelectQuestion}
              />
              <Row className={"two-button-container"}>
                <Col className={"button-left"}>
                  <Button
                    style={{ fontSize: 10, fontWeight: "bold", width: 70 }}
                    type="submit"
                    onClick={onAddClicked}
                  >
                    ADD
                  </Button>
                </Col>
                <Col className={"button-right"}>
                  <Popup
                    trigger={
                      <Button
                        style={{ fontSize: 10, fontWeight: "bold", width: 70 }}
                        type="submit"
                        onClick={onAddClicked}
                        variant="danger"
                      >
                        DELETE
                      </Button>
                    }
                    modal
                  >
                    {(close) => (
                      <div>
                        <h6 className={"txt-title"}>
                          Are you sure to delete question number {selected}?
                        </h6>
                        <Button
                          style={{
                            fontSize: 10,
                            fontWeight: "bold",
                            width: 70,
                          }}
                          type="submit"
                          onClick={() => onDeleteClicked(close)}
                        >
                          Yes
                        </Button>
                        <Button
                          style={{
                            fontSize: 10,
                            fontWeight: "bold",
                            width: 70,
                            marginLeft: 10,
                          }}
                          variant="secondary"
                          onClick={() => close()}
                        >
                          No
                        </Button>
                      </div>
                    )}
                  </Popup>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className={`right-pane col-sm-8 ${
              selected ? "" : "d-none d-md-block"
            }`}
            style={{ backgroundColor: "rgb(182, 221, 242)", height: "100vh" }}
          >
            <button
              className="m-2 bg-gradient rounded btn btn-default d-sm-block d-md-none"
              onClick={handleOnBackToQuetionList}
            >
              {"Back"}
            </button>
            <div className={"right-item"}>
              <SelectQuestionContainer
                data={data}
                selected={selected}
                onChangeQuestion={onChangeQuestion}
                onAddAnswer={onAddAnswer}
                onDeleteAnswer={onDeleteAnswer}
                setSelectedOption={setOption}
                onChangeAnswer={onChangeAnswer}
                onAddImg={onAddImg}
                onDeleteImg={onDeleteImg}
              />
            </div>
          </div>
        </Row>
        {/* <Row>
          <Col>
            <AudioRecord />
          </Col>
          <Col>
            <VideoRecord />
          </Col>
        </Row>
        <Row></Row> */}
      </Col>
    </Container>
  );
}

export default App;
