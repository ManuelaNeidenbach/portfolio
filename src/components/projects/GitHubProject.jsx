import { useTheme } from '../../context/ThemeContext'
import useGitHubRepositoryLanguages from '../../hooks/useGitHubRepositoryLanguages'

function GitHubProject({ repository }) {
  const { isDark } = useTheme()

  const [languages, languageError, languagesLoading] =
    useGitHubRepositoryLanguages(repository.languages_url)

  const languageEntries = Object.entries(languages)

  return (
    <article
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

      <p
        className={`mt-3 leading-relaxed ${
          isDark ? 'text-zinc-200' : 'text-[#3b4351]'
        }`}
      >
        {repository.description || 'Keine Beschreibung vorhanden.'}
      </p>

      <div className="mt-5">
        <p className="font-semibold">Sprachen:</p>

        {languagesLoading && (
          <p className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>
            Sprachen werden geladen...
          </p>
        )}

        {languageError && (
          <p className="text-red-500">
            {languageError}
          </p>
        )}

        {!languagesLoading &&
          !languageError &&
          languageEntries.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {languageEntries.map(([language, lines]) => (
                <span
                  key={language}
                  className={`rounded-full px-3 py-1 text-sm ${
                    isDark
                      ? 'bg-zinc-800 text-zinc-100'
                      : 'bg-[#e8dcda] text-[#1f2430]'
                  }`}
                >
                  {language}: {lines}
                </span>
              ))}
            </div>
          )}
      </div>

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
  )
}

export default GitHubProject