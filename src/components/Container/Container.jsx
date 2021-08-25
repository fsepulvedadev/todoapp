import React, { useState } from "react";
import FormTodo from "../FormToDo/FormTodo";
import TaskList from "../TaskList/TaskList";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  return (
    <div>
      <h1 className="title">To Do App</h1>
      <FormTodo handleAddItem={handleAddItem}></FormTodo>
      <TaskList list={list} setList={setList}></TaskList>
    </div>
  );
};

export default Container;
