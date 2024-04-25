import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import React from "react";

const ToDoList = ({ text, updateMode, deleteToDo }) => {
  const editstyle = () => {
    const targetDivId = "taskForm";
    const targetElement = document.getElementById(targetDivId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Target element not found.");
    }
  };

  return (
    <div className="task-container">
      <p className="task">{text}</p>
      <div className="control-btns">
        <button>
          <MdEdit
            onClick={() => {
              updateMode();
              editstyle();
            }}
          />
        </button>
        <button>
          <MdDelete onClick={deleteToDo} />
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
