import { useCallback, useRef } from 'react'

export default function ToDoForm({ listNames, create }) {
  const description = useRef(null)
  const list = useRef(null)

  const onSubmit = useCallback((e) => {
    e.preventDefault()

    create(
      list.current.value,
      description.current.value
    )
  }, [create])

  return (
    <form className="box" onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="description">A faire :</label>
        <div className="control">
          <input
            id="description"
            className="input is-primary"
            ref={description}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="list">Dans la list :</label>
        <div className="control">
          <input
            id="list"
            className="input"
            list="list-name"
            autoComplete="off"
            ref={list}
          />
          <datalist id="list-name">
            {listNames.map((name) => <option key={name} value={name} />)}
          </datalist>
        </div>
      </div>

      <button className="button is-primary">Ajouter</button>
    </form>
  )
}
