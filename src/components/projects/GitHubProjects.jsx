 import useGitHubRepositories from '../../hooks/useGitHubRepositories'
import { useTheme } from '../../context/ThemeContext'
import GitHubProject from './GitHubProject'

function GitHubProjects({ username, sortBy }) {
  const { isDark } = useTheme()
  const [repositories, error, isLoading] = useGitHubRepositories(username, sortBy)

  if (isLoading) {
    return (
      <div
        className={`rounded-[24px] p-6 ${
          isDark
            ? 'border border-zinc-700 bg-zinc-900 text-zinc-200'
            : 'border border-[#ddd4d1] bg-white/70 text-[#3b4351]'
        }`}
      >
        GitHub Projekte werden geladen...
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-[24px] border border-red-300 bg-red-50 p-6 text-red-700">
        Fehler beim Laden: {error}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {repositories.map((repository) => (
        <GitHubProject key={repository.id} repository={repository} />
      ))}
    </div>
  )
}

export default GitHubProjects