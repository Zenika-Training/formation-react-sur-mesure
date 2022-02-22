import 'bulma/css/bulma.css'
import React, { useCallback } from 'react'
import useNamedState from '../hooks/useNamedState'
import ToDoForm from './ToDoForm'
import ToDoNav from './ToDoNav'
import ToDoList from './ToDoList'
import useCurrentList from '../hooks/useCurrentList'

const add = (list, description) => (state) => (
  [...state, {
    id: btoa(`${list}-${description}`),
    list,
    description,
    done: false
  }]
)

const update = (id, done) => (state) => state.map(
  (item) => (item.id === id ? { ...item, done } : item)
)

const remove = (id) => (state) => state.filter(
  (item) => (item.id !== id)
)

export default function ToDoApp() {
  const [state, setState] = useNamedState('state', [])
  const onUpdate = useCallback((id, done) => setState(update(id, done)), [setState])
  const onRemove = useCallback((id) => setState(remove(id)), [setState])
  const onCreate = useCallback((list, description) => setState(add(list, description)), [setState])

  const stateWithUpdate = state.map((item) => ({
    ...item,
    update: onUpdate,
    remove: onRemove
  }))

  const groups = stateWithUpdate.reduce((obj, item) => ({
    ...obj,
    [item.list]: [...(obj[item.list] || []), item]
  }), {})

  const lists = Object.keys(groups).sort()
  const current = useCurrentList(lists)

  return (
    <main lang="fr" className="container is-max-desktop my-4 px-4">
      <h1 className="title is-1 has-text-centered" style={{
        fontVariant: `small-caps`
      }}>{current
        ? <a href="#" className="has-text-black">Mes choses à faire</a>
        : 'Mes choses à faire'}
      </h1>
      <ToDoForm listNames={lists} create={onCreate} />

      <div className="columns">
        <aside className="column is-one-third">
          <ToDoNav lists={lists} current={current} />
        </aside>
        <div className="column">
          <ToDoList
            name={current}
            items={(current && groups[current]) || stateWithUpdate}
          />
        </div>
      </div>
    </main>
  )
}
