import React from 'react'
import { Link, useParams } from 'react-router-dom'
import shallow from 'zustand/shallow'
import classNames from 'classnames'
import { urlize } from '../utils/tags'
import useStore from '../hooks/useStore'

export default function ToDoNav() {
  const lists = useStore((state) => (
    Array.from(
      state.todos.reduce(
        ($, { list }) => $.add(list),
        new Set()
      )
    ).sort()
  ), shallow)

  const { listID } = useParams()

  return (
    <nav className="box">
      <ul>
        <li className={classNames({
          'has-text-weight-semibold': listID === `all`
        })}><Link to="/all">Tout afficher</Link></li>
        {lists.filter(name => name).map((name) => {
          const id = urlize`${name}`

          return (
            <li key={name}>
              <small> ‣ <Link className={classNames({
                'has-text-weight-semibold': listID === id,
                'is-italic': listID !== id
              })} to={id}>{name}</Link></small>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
