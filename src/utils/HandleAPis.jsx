import axios from "axios";

const baseurl = "https://todo-backend-12nk.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(baseurl).then(({ data }) => {
    console.log("Data =>", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseurl}/create`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

const updateTodo = (todoId, text, setText, setToDo, setIsUpdating) => {
  axios
    .post(`${baseurl}/update`, { _id: todoId, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

const deleteTodo = (_id, setToDo) => {
  axios
    .post(`${baseurl}/delete`, { _id })
    .then((data) => {
      console.log(data);

      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

export { getAllToDo, addToDo, updateTodo, deleteTodo };
