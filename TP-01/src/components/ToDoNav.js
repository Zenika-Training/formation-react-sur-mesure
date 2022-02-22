import React from 'react'
import classNames from 'classnames'
import { urlize } from '../utils/tags'

export default function ToDoNav({ lists, current }) {
  return (
    <nav className="box">
      <ul>
        <li className={classNames({
          'has-text-weight-semibold': !current
        })}><a href="#">Tout afficher</a></li>
        {lists.filter(name => name).map((name) => (
          <li key={name}>
            <small> ‣ <a className={classNames({
              'has-text-weight-semibold': current === name,
              'is-italic': current !== name
            })} href={urlize`#${name}`}>{name}</a></small>
          </li>
        ))}
      </ul>
    </nav>
  )
}
