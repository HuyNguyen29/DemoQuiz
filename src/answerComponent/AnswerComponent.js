import { Col, Container, Row } from "react-bootstrap";
import autosize from "autosize";
import React, { useEffect, useRef } from "react";

function AnswerComponent(props) {
  const ref = useRef(null);

  useEffect(() => {
    autosize(ref.current);
  });

  const onFocusOption = (index) => {
    props.setSelectedOption(index);
  };

  const onChangeValue = (value) => {
    props.onChangeAnswer(value);
  };

  return (
    <Row
      style={{
        padding: 0,
        width: "100%",
      }}
    >
      {props?.data?.[props.selected]?.answer.map((answer, index) => (
        <>
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
        </>
      ))}
    </Row>
  );
}

export default React.memo(AnswerComponent);
