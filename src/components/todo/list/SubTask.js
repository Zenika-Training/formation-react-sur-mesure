import "./SubTask.scss";

function Subtask({ name, done }) {
  return (
    <div className="subtask__wrapper">
      <input type="checkbox" checked={done} />{" "}
      <span className="subtask__text">{name}</span>
    </div>
  );
}

export default Subtask;
