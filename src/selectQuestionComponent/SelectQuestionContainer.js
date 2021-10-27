import { Col, Row, Button } from "react-bootstrap";
import autosize from "autosize";
import React, { useEffect, useRef, useState } from "react";
import AnswerComponent from "../answerComponent/AnswerComponent";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function SelectQuestionContainer(props) {
  const ref = useRef(null);
  const [img, setImg] = useState("");

  useEffect(() => {
    autosize(ref.current);
  });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onDeleteAnswer = (close) => {
    props.onDeleteAnswer();
    close();
  };

  return (
    <div>
      <ul className={"question-item"}>
        <h6 className={"txt-title"}>Design question {props.selected + 1}</h6>
        <Row
          style={{
            padding: 0,
          }}
          classname={"form-item"}
        >
          <Col
            style={{ padding: 0 }}
            lg={2}
            md={3}
            sm={3}
            xl={2}
            xs={12}
            xxl={2}
          >
            <h6 className={"txt-item-bold"}>Question</h6>
          </Col>
          <Col className="p-0" lg={10} md={9} sm={9} xl={10} xs={12} xxl={10}>
            <textarea
              ref={ref}
              style={{
                maxHeight: "75px",
                minHeight: "38px",
                width: "100%",
                resize: "none",
                boxSizing: "border-box",
                fontSize: "1rem",
                textCombineUpright: "center",
              }}
              placeholder="Type question"
              rows={1}
              onChange={props.onChangeQuestion}
              value={props.data[props.selected]?.question}
            />
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <input
                type="file"
                onChange={onImageChange}
                className="filetype"
                id="group_image"
              />
              {!!img ? (
                <img className={"img-add"} src={img} alt="description" />
              ) : null}
              {/* <Button
                style={{ fontSize: 10, fontWeight: "bold" }}
                type="submit"
              >
                ADD IMAGE
              </Button> */}
            </div>
          </Col>
        </Row>
      </ul>
      <ul className={"list-item-answer"}>
        <AnswerComponent
          data={props.data}
          selected={props.selected}
          setSelectedOption={props.setSelectedOption}
          onChangeAnswer={props.onChangeAnswer}
        />
      </ul>
      <Row className={"two-button-container"}>
        <Col className={"button-left"}>
          <Button
            style={{ fontSize: 10, fontWeight: "bold" }}
            type="submit"
            onClick={props.onAddAnswer}
          >
            ADD
          </Button>
        </Col>
        <Col className={"button-right"}>
          <Popup
            trigger={
              <Button
                style={{ fontSize: 10, fontWeight: "bold" }}
                type="submit"
              >
                DELETE
              </Button>
            }
            modal
          >
            {(close) => (
              <div>
                <h6 className={"txt-title"}>
                  Are you sure to delete this item?
                </h6>
                <Button
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                    width: 70,
                  }}
                  type="submit"
                  onClick={() => onDeleteAnswer(close)}
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
  );
}

export default React.memo(SelectQuestionContainer);
