import React from "react";

const Checkbox = (props) => {
  const {
    data: { id, description, done },
    onChange,
  } = props;

  return (
    <>
      <label className={done ? "done" : "undone"}>
        <div>{description}</div>
        <input
          type="checkbox"
          className={done ? "done" : "undone"}
          name={id}
          defaultChecked={done}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Checkbox;
