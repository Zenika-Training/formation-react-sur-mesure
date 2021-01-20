import Subtask from "./SubTask";

function Todo({ id, name, priority, subTasks }) {
  return (
    <div>
      <div>
        <span>#{id}</span>
        <span>{name}</span>
        <span>{priority}</span>
      </div>
      <div>
        <Subtask {...subTasks[0]} />
      </div>
    </div>
  );
}

export default Todo;
