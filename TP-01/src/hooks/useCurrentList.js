import { useCallback, useEffect, useState } from 'react'
import { urlize } from '../utils/tags'

const memoLists = (lists) => {
  let key = JSON.stringify(lists)

  if (!memoLists[key]) {
    memoLists[key] = lists
  }

  return memoLists[key]
}

export default function useCurrentList(lists) {
  const mLists = memoLists(lists)
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (!current) { window.location.hash = '#' }
  }, [current])

  const onHashChange = useCallback(() => {
    const hash = window.location.hash
    const newCurrent = mLists.find((name) => (hash === urlize`#${name}`))
    setCurrent(newCurrent)
  }, [mLists])

  useEffect(() => {
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [onHashChange])

  return current
}
