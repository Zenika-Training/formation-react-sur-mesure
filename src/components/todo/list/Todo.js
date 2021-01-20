import Subtask from "./SubTask";
import "./Todo.scss";

function Todo({ id, name, priority, subTasks }) {
  return (
    <div className="todo__wrapper">
      <div className="todo__header">
        <span>#{id}</span>
        <span>{name}</span>
        <span>{priority}</span>
      </div>
      <div className="todo__subtasks">
        <Subtask {...subTasks[0]} />
      </div>
    </div>
  );
}

export default Todo;
