import "./App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import autosize from "autosize";
import { useCallback, useEffect, useRef, useState } from "react";
import SelectQuestionComponent from "./selectQuestionComponent/SelectQuestionComponent";
import SelectQuestionContainer from "./selectQuestionComponent/SelectQuestionContainer";
import { useReactMediaRecorder } from "react-media-recorder";
import AudioRecord from "./AudioRecord";
import VideoRecord from "./VideoRecord";

function App() {
  const ref = useRef(null);
  const [data, setData] = useState([]);

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
    if (tmp) {
      setData(tmp);
    } else {
      setData([]);
    }
  }, []);

  useEffect(() => {
    autosize(ref.current);
  });

  const setSelectQuestion = useCallback((index) => {
    setSelected(index);
  }, []);

  const onAddClicked = useCallback(() => {
    const add = { question: "", answer: [{ option: "" }] };
    const tmp = [...data];
    tmp.push(add);
    setData(tmp);
    setSelected(tmp.length - 1);
  }, [data]);

  const onDeleteClicked = useCallback(() => {
    const tmp = [...data];
    tmp.splice(selected, 1);
    setData(tmp);
  }, [selected, data]);

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
      console.log(`%c tmp`, "color: blue; font-weight: 600", tmp);
      localStorage.setItem("data", JSON.stringify(tmp));
    },
    [data, selected, selectedOption]
  );

  const onAddAnswer = useCallback(() => {
    const add = { option: "" };
    const tmp = [...data];
    tmp[selected].answer.push(add);
    setData(tmp);
  }, [data, selected]);

  const onDeleteAnswer = useCallback(() => {
    const tmp = [...data];
    tmp[selected].answer.splice(selectedOption, 1);
    setData(tmp);
  }, [data, selected, selectedOption]);

  const setOption = useCallback((index) => {
    setSelectedOption(index);
  }, []);

  return (
    <Container fluid className="p-0">
      <Col>
        <Row>
          <Col
            className="left-container"
            lg={4} //992
            md={4} // >= 768
            xl={4} //1200
            sm={5} // >=576
            xs={12} //<576
            xxl={4} // >14000
          >
            <div className={"left-item"}>
              <ul className={"list-item"}>
                <h6 className={"txt-title"}>Select your questions</h6>
                {data.map((item, index) => (
                  <SelectQuestionComponent
                    index={index}
                    key={item.question}
                    data={item}
                    selected={selected}
                    setSelected={setSelectQuestion}
                  />
                ))}
              </ul>
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
                  <Button
                    style={{ fontSize: 10, fontWeight: "bold", width: 70 }}
                    type="submit"
                    onClick={onDeleteClicked}
                  >
                    DELETE
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            lg={8}
            md={8}
            sm={7}
            xl={8}
            xs={12}
            xxl={8}
            className="right-container"
          >
            <div className={"right-item"}>
              <SelectQuestionContainer
                data={data}
                selected={selected}
                onChangeQuestion={onChangeQuestion}
                onAddAnswer={onAddAnswer}
                onDeleteAnswer={onDeleteAnswer}
                setSelectedOption={setOption}
                onChangeAnswer={onChangeAnswer}
              />
            </div>
          </Col>
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
