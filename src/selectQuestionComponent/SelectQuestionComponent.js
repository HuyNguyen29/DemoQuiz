import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Col } from "react-bootstrap";

const SelectQuestionComponent = forwardRef((props, ref) => {
  const messagesEndRef = useRef(null);

  const toggleTouched = (index) => {
    props.setSelected(index);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useImperativeHandle(ref, () => ({
    scrollToBottom: scrollToBottom,
  }));

  return (
    <div className={"list-item"}>
      {props.data?.map((item, index) => (
        <Col key={item.question}>
          <button
            type="button"
            class="btn btn-primary-outline"
            onClick={() => toggleTouched(index)}
          >
            <h6
              className={
                props.selected === index ? "txt-item-touched" : "txt-item"
              }
            >
              {index + 1}. {item.question}
            </h6>
          </button>
        </Col>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
});

export default React.memo(SelectQuestionComponent);
