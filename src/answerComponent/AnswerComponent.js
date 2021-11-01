import { Col, Container, Row } from "react-bootstrap";
import autosize from "autosize";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const AnswerComponent = forwardRef((props, ref) => {
  const optionEndRef = useRef(null);
  const refInput = useRef(null);

  useEffect(() => {
    autosize(refInput.current);
  });

  const onFocusOption = (index) => {
    props.setSelectedOption(index);
  };

  const onChangeValue = (value) => {
    props.onChangeAnswer(value);
  };

  const scrollToBottom = () => {
    optionEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useImperativeHandle(ref, () => ({
    scrollToBottom: scrollToBottom,
  }));

  return (
    <ul className={"list-item-answer"}>
      {props?.data?.[props.selected]?.answer.map((answer, index) => (
        <Row
          style={{
            padding: 0,
            width: "100%",
          }}
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
            <h6 className={"txt-item-bold"}>Option {index + 1}</h6>
          </Col>
          <Col className="p-0" lg={10} md={9} sm={9} xl={10} xs={12} xxl={10}>
            <textarea
              ref={refInput}
              style={{
                maxHeight: "75px",
                minHeight: "38px",
                width: "100%",
                resize: "none",
                boxSizing: "border-box",
                fontSize: "1rem",
                textCombineUpright: "center",
              }}
              placeholder="Type option"
              rows={1}
              value={answer.option}
              onFocus={() => onFocusOption(index)}
              onChange={onChangeValue}
            />
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            ></div>
          </Col>
        </Row>
      ))}
      <div ref={optionEndRef} />
    </ul>
  );
});

export default React.memo(AnswerComponent);
