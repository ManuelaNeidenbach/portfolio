async function fetchGitHubProjects(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)

  if (!response.ok) {
    throw new Error('GitHub Projekte konnten nicht geladen werden')
  }

  const repositories = await response.json()
  return repositories
}

export default fetchGitHubProjects