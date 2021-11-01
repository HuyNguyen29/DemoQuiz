import { Col, Row, Button } from "react-bootstrap";
import autosize from "autosize";
import React, { useEffect, useRef, useState } from "react";
import AnswerComponent from "../answerComponent/AnswerComponent";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function SelectQuestionContainer(props) {
  const ref = useRef(null);
  const selectImageRef = useRef(null);
  const refOption = useRef(null);
  const [selected, setSelected] = useState();

  useEffect(() => {
    autosize(ref.current);
  });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        props.onAddImg(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onDeleteAnswer = (close) => {
    props.onDeleteAnswer();
    close();
  };

  const setSelectedOption = (index) => {
    props.setSelectedOption(index);
    setSelected(index);
  };

  const onClickSelectImage = () => {
    selectImageRef.current?.click();
  };

  const onDeleteSelectImage = (close) => {
    props.onDeleteImg();
    close();
  };

  const onAddOption = () => {
    props.onAddAnswer();
    setTimeout(() => {
      refOption.current.scrollToBottom();
    }, 200);
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
                width: "95%",
                resize: "none",
                boxSizing: "border-box",
                fontSize: "1rem",
                textCombineUpright: "center",
              }}
              placeholder="Type question"
              rows={1}
              onChange={props.onChangeQuestion}
              value={props.data?.[props.selected]?.question}
            />
            {!!props.data?.[props.selected]?.img ? (
              <div class="d-flex align-items-center flex-column">
                <img
                  style={{ maxHeight: "20vh" }}
                  src={props.data?.[props.selected]?.img}
                  alt="description"
                />
                <div class="d-flex justify-content-center">
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={onImageChange}
                      className="d-none"
                      id="group_image"
                      ref={selectImageRef}
                    />
                    <Button
                      className="btn btn-primary bg-gradient m-2"
                      onClick={onClickSelectImage}
                      variant="secondary"
                    >
                      Edit
                    </Button>
                  </div>
                  <Popup
                    trigger={
                      <Button
                        className="btn btn-primary bg-gradient m-2"
                        onClick={onDeleteSelectImage}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    }
                    modal
                  >
                    {(close) => (
                      <div>
                        <h6 className={"txt-title"}>
                          Are you sure to delete this image?
                        </h6>
                        <Button
                          style={{
                            fontSize: 10,
                            fontWeight: "bold",
                            width: 70,
                          }}
                          type="submit"
                          onClick={() => onDeleteSelectImage(close)}
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
                </div>
              </div>
            ) : (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onImageChange}
                  className="d-none"
                  id="group_image"
                  ref={selectImageRef}
                />
                <Button
                  className="btn btn-primary bg-gradient m-2"
                  onClick={onClickSelectImage}
                >
                  Add Image
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </ul>

      <AnswerComponent
        data={props.data}
        selected={props.selected}
        setSelectedOption={setSelectedOption}
        onChangeAnswer={props.onChangeAnswer}
        ref={refOption}
      />
      <Row className={"two-button-container"}>
        <Col className={"button-left"}>
          <Button
            style={{ fontSize: 10, fontWeight: "bold" }}
            type="submit"
            onClick={onAddOption}
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
                  Are you sure to delete option number {selected + 1}?
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
