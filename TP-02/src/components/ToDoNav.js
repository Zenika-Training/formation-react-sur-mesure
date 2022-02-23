import React from 'react'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'
import { urlize } from '../utils/tags'

export default function ToDoNav({ lists }) {
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
