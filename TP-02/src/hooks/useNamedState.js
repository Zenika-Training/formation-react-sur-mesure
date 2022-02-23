import { useEffect, useState } from 'react'

export default function useNamedState(name, initValue) {
  const [state, setState] = useState(initValue)

  useEffect(() => {
    const prev = localStorage.getItem(name)

    if (prev) { setState(JSON.parse(prev)) }
  }, [])

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(state))
  }, [name, state])

  return [state, setState]
}
