import { useEffect, useState } from 'react'
import fetchGitHubProjects from '../../api/fetchGitHubProjects'
import { useTheme } from '../../context/ThemeContext'

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

function GitHubProjects({ username, sortBy }) {
  const { isDark } = useTheme()
  const [repositories, setRepositories] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadRepositories() {
      try {
        setIsLoading(true)
        setErrorMessage('')

        const data = await fetchGitHubProjects(username)
        const sortedData = sortRepositories(data, sortBy)

        setRepositories(sortedData)
      } catch (error) {
        setErrorMessage(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadRepositories()
  }, [username, sortBy])

  if (isLoading) {
    return <p className={isDark ? 'text-zinc-200' : 'text-[#3b4351]'}>GitHub Projekte werden geladen...</p>
  }

  if (errorMessage) {
    return <p className="text-red-500">{errorMessage}</p>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {repositories.map((repository) => (
        <article
          key={repository.id}
          className={`rounded-[24px] p-6 transition hover:-translate-y-1 ${
            isDark
              ? 'border border-zinc-700 bg-zinc-900 text-zinc-100'
              : 'border border-[#ddd4d1] bg-white/70 text-[#1f2430]'
          }`}
        >
          <h3
            className="text-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {repository.name}
          </h3>

          <p className={`mt-3 leading-relaxed ${isDark ? 'text-zinc-200' : 'text-[#3b4351]'}`}>
            {repository.description || 'Keine Beschreibung vorhanden.'}
          </p>

          <a
            href={repository.html_url}
            target="_blank"
            rel="noreferrer"
            className={`mt-6 inline-block rounded-full px-5 py-3 font-semibold transition ${
              isDark
                ? 'bg-stone-100 text-zinc-900 hover:bg-stone-200'
                : 'bg-[#e8dcda] text-[#1f2430] hover:bg-[#decdca]'
            }`}
          >
            Auf GitHub ansehen
          </a>
        </article>
      ))}
    </div>
  )
}

export default GitHubProjects