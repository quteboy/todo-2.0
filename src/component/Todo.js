import React from "react";

export default (props) => (
  // eslint-disable-next-line no-use-before-define
  <li
    style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
    className="list-group-item d-flex justify-content-between align-items-center"
  >
    {props.todo.text}
    <span>
      <input type="checkbox" onClick={props.toggleComplete} />
      {/* <button onClick={props.onDelete} className="btn btn-outline-primary">X</button> */}
    </span>
  </li>
  // eslint-disable-next-line no-use-before-define
);

