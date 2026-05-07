import { useEffect, useState } from 'react'

function useGitHubRepositoryLanguages(languagesUrl) {
  const [languages, setLanguages] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadLanguages() {
      if (!languagesUrl) return

      try {
        setIsLoading(true)
        setError('')

        const response = await fetch(languagesUrl)

        if (!response.ok) {
          throw new Error('Sprachen konnten nicht geladen werden')
        }

        const data = await response.json()
        setLanguages(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadLanguages()
  }, [languagesUrl])

  return [languages, error, isLoading]
}

export default useGitHubRepositoryLanguages