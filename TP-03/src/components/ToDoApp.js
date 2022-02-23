import 'bulma/css/bulma.css'
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router, Routes, Route, Outlet, Link,
  useParams, useNavigate
} from 'react-router-dom'
import ToDoForm from './ToDoForm'
import ToDoNav from './ToDoNav'
import ToDoList from './ToDoList'

function ToDoApp() {
  const { listID } = useParams()
  const navigate = useNavigate()

  useEffect(() => navigate('/all', { replace: true }), [])

  return (
    <main lang="fr" className="container is-max-desktop my-4 px-4">
      <h1 className="title is-1 has-text-centered" style={{
        fontVariant: `small-caps`
      }}>{listID !== 'all'
        ? <Link to="/all" className="has-text-black">Mes choses à faire</Link>
        : 'Mes choses à faire'}
      </h1>
      <ToDoForm />

      <div className="columns">
        <aside className="column is-one-third">
          <ToDoNav />
        </aside>
        <div className="column">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoApp />}>
          <Route path=":listID" element={<ToDoList />} />
        </Route>
      </Routes>
    </Router>
  )
}
