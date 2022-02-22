import ToDoItem from './ToDoItem'

export default function ToDoList({ name, items }) {
  return (
    <section className="box">
      {name && <h2 className="title is-3">{name}</h2>}
      <ul>
        {items.map((data) => (
          <li key={data.id} className="is-flex mb-1">
            <ToDoItem {...data} />
          </li>
        ))}
      </ul>
    </section>
  )
}
