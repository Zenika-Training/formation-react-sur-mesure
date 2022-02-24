import { useParams } from 'react-router-dom'
import useStore from '../hooks/useStore'
import { urlize } from '../utils/tags'
import ToDoItem from './ToDoItem'

export default function ToDoList() {
  const all = useStore((state) => state.todos)
  const { listID } = useParams()

  const items = (listID === `all` && all) || all.filter(({ list }) => listID === urlize`${list}`)
  const name = listID !== `all` && items[0]?.list

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
