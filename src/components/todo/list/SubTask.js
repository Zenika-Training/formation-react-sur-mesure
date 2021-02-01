import "./SubTask.scss";

function Subtask({ name, done, onChange }) {
  return (
    <div className="subtask__wrapper">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => onChange(e.target.checked)}
      />{" "}
      <span className="subtask__text">{name}</span>
    </div>
  );
}

export default Subtask;
