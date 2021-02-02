import "./TodoForm.scss";

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
        <div className="todo-form__subtasks">
          <div>
            <input id="subtasks" type="text" />
            <button type="button">-</button>
            <button type="button">+</button>
          </div>
        </div>
      </div>
      <button type="submit">Creation ou mise à jour</button>
    </form>
  );
}

export default TodoForm;
