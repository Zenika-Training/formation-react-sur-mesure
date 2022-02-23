import { useParams, useOutletContext } from 'react-router-dom'
import { urlize } from '../utils/tags'
import ToDoItem from './ToDoItem'

export default function ToDoList() {
  const [groups, all] = useOutletContext()
  const { listID } = useParams()

  const name = Object.keys(groups).find((key) => (listID === urlize`${key}`))
  const items = (name && groups[name]) || all

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
