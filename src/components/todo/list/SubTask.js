function Subtask({ name, done }) {
  return (
    <div>
      <input type="checkbox" checked={done} /> {name}
    </div>
  );
}

export default Subtask;
