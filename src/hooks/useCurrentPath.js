import { useEffect, useState } from 'react'

const useCurrentPath = () => {
  const [path, setPath] = useState(null)

  useEffect(() => {
    setPath(window.location.origin)

    return () => {
      setPath(null)
    }
  }, [])

  return path
}

export default useCurrentPath
