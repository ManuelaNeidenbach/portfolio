import { useEffect, useState } from 'react'
import fetchGitHubProjects from '../api/fetchGitHubProjects'

function sortRepositories(repositories, sortBy) {
  const sortedRepositories = [...repositories]

  if (sortBy === 'name') {
    sortedRepositories.sort((repoA, repoB) =>
      repoA.name.localeCompare(repoB.name)
    )
  }

  if (sortBy === 'created_at') {
    sortedRepositories.sort(
      (repoA, repoB) => new Date(repoB.created_at) - new Date(repoA.created_at)
    )
  }

  if (sortBy === 'updated_at') {
    sortedRepositories.sort(
      (repoA, repoB) => new Date(repoB.updated_at) - new Date(repoA.updated_at)
    )
  }

  return sortedRepositories
}

function useGitHubRepositories(username, sortBy = 'updated_at') {
  const [repositories, setRepositories] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadRepositories() {
      try {
        setIsLoading(true)
        setError('')

        const data = await fetchGitHubProjects(username)
        const sortedData = sortRepositories(data, sortBy)

        setRepositories(sortedData)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadRepositories()
  }, [username, sortBy])

  return [repositories, error, isLoading]
}

export default useGitHubRepositories