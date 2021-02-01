import { useEffect, useState } from "react";
import useAuthApi from "../../api/useAuthApi";
import useUserInfos from "../../userInfos/useUserInfos";
import Todo from "./Todo";
import "./TodoList.scss";

function TodoList() {
  const { addInfos } = useUserInfos();
  const [tasks, setTasks] = useState([]);
  const api = useAuthApi();

  useEffect(() => {
    api
      .get("/tasks")
      .then(({ data }) => setTasks(data))
      .catch((e) => console.error(e));
  }, []);

  const handleCheck = (id) => (subTaskIndex) => (done) => {
    const updatedTask = { ...tasks.find((t) => t.id === id) };
    const updatedSubTasks = updatedTask.subTasks.map((t, index) => {
      if (index === subTaskIndex) {
        return { ...t, done };
      }
      return t;
    });

    api
      .put(`/tasks/${id}`, { ...updatedTask, subTasks: [...updatedSubTasks] })
      .then(({ data }) => {
        setTasks((ts) =>
          ts.map((t) => {
            if (t.id === id) {
              return data;
            }
            return t;
          })
        );
      })
      .then(() => {
        api.get("/users/current").then(({ data }) => addInfos(data));
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="todo-list__wrapper">
      {tasks.map((task) => (
        <Todo {...task} key={task.id} onSubTaskChange={handleCheck(task.id)} />
      ))}
    </div>
  );
}

export default TodoList;
