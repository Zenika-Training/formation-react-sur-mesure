import create from 'zustand'
import { persist } from "zustand/middleware"

export default create(persist(set => ({
  todos: [],

  create: (list, description) => set(({ todos }) => ({
    todos: [
      ...todos,
      {
        id: btoa(`${list}-${description}`),
        list, description, done: false
      }
    ]
  })),

  remove: (id) => set(({ todos }) => ({
    todos: todos.filter(
      (item) => (item.id !== id)
    )
  })),

  update: (id, done) => set(({ todos }) => ({
    todos: todos.map((item) => (item.id === id ? { ...item, done } : item))
  }))
}), {
  name: `state`,
}))
