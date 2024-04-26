import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import { IoMdAdd } from "react-icons/io";
import ToDoList from "./ToDoList";
import { IoMdCheckmark } from "react-icons/io";

import {
  addToDo,
  updateTodo,
  getAllToDo,
  deleteTodo,
} from "../utils/HandleAPis";

const Home = () => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <>
      <div className="homemain">
        <div className="header">
          <h1 className="title">Todo App</h1>
          <h2 className="tegline">Organize your day</h2>
        </div>
        <div className="main" id="taskForm">
          <div className="addnew">
            <h3 className="heading">{isUpdating ? "Edit":"Add"} Tasks</h3>
            <form className="addtask">
              <input
                type="text"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Your Task.."
              />
              <button
                onClick={
                  isUpdating
                    ? () =>
                        updateTodo(
                          todoId,
                          text,
                          setToDo,
                          setText,
                          setIsUpdating
                        )
                    : () => addToDo(text, setText, setToDo)
                }
                
                className={isUpdating ? "updating" : ""}
              >
                {isUpdating ? <IoMdCheckmark /> : <IoMdAdd />}
              </button>
            </form>
          </div>
          <div className="tasklist">
            {toDo.map((item) => (
              <ToDoList
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteTodo(item._id, setToDo)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
