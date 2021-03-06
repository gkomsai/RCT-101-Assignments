import React, { useState } from "react";
import Todolist from "./TodoIist";
import TodoInput from "./TodoInput";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (el) => {
    // console.log(el);
setTodos([...todos, { id: Date.now(), value: el }]);
  };
  const deleteTodo = (id) => {
    // console.log(id);
  let newTodo =  todos.filter(el=> el.id !== id)
  setTodos(newTodo);
  };
//Note-addTodo ek method hai props object ka. 
  return (
    <>
      <TodoInput addTodos={addTodo} /> 
      <Todolist todos={todos}  deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoApp;
