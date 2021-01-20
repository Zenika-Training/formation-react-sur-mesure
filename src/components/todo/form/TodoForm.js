function TodoForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="priority">Priority :</label>
        <input id="priority" type="number" />
      </div>
      <div>
        <label>Subtasks :</label>
        <div>
          <input id="subtasks" type="text" />
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </div>
      <button type="submit">Creation ou mise à jour</button>
    </form>
  );
}

export default TodoForm;
