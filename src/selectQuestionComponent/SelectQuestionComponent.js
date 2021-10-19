import autosize from "autosize";
import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";

const SelectQuestionComponent = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    autosize(ref.current);
  });

  const toggleTouched = () => {
    props.setSelected(props.index);
  };

  return (
    <Col>
      <button
        type="button"
        class="btn btn-primary-outline"
        onClick={toggleTouched}
      >
        <h6
          key={props.data.question}
          className={
            props.selected === props.index ? "txt-item-touched" : "txt-item"
          }
        >
          {props.index + 1}. {props.data.question}
        </h6>
      </button>
    </Col>
  );
};

export default React.memo(SelectQuestionComponent);
