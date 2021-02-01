import Subtask from "./SubTask";
import "./Todo.scss";

function Todo({ id, name, priority, subTasks, onSubTaskChange }) {
  return (
    <div className="todo__wrapper">
      <div className="todo__header">
        <span>#{id}</span>
        <span>{name}</span>
        <span>{priority}</span>
      </div>
      <div className="todo__subtasks">
        {subTasks.map((subTask, index) => (
          <Subtask
            {...subTask}
            key={subTask.name}
            onChange={onSubTaskChange(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
