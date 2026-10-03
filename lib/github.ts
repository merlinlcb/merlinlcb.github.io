/**
 * Pulls public GitHub stats at build time (no third-party services, nothing
 * fetched in the visitor's browser). The deploy workflow passes GITHUB_TOKEN
 * for a higher API rate limit and rebuilds weekly so the numbers stay fresh.
 *
 * If the API is unreachable the function returns null and the page simply
 * hides the GitHub section instead of failing the build.
 */

export type LanguageShare = { name: string; percent: number; color: string }

export type GitHubStats = {
  publicRepos: number
  languageCount: number
  followers: number
  languages: LanguageShare[]
}

type ApiRepo = {
  name: string
  fork: boolean
  languages_url: string
}

// GitHub's linguist colors for common languages; anything else gets a neutral tone.
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Shell: "#89e051",
  PowerShell: "#012456",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Java: "#b07219",
  "C#": "#178600",
  C: "#555555",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Lua: "#000080",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dockerfile: "#384d54",
  Batchfile: "#C1F12E",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  "Jupyter Notebook": "#DA5B0B",
  GDScript: "#355570",
  AutoHotkey: "#6594b9",
}
const FALLBACK_COLOR = "#8b949e"
const MAX_LANGUAGES = 6

async function gh<T>(path: string): Promise<T> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

  const url = path.startsWith("http") ? path : `https://api.github.com${path}`
  const res = await fetch(url, { headers, cache: "force-cache" })
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${url}`)
  return res.json() as Promise<T>
}

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    const [user, repos] = await Promise.all([
      gh<{ public_repos: number; followers: number }>(`/users/${username}`),
      gh<ApiRepo[]>(`/users/${username}/repos?per_page=100&type=owner&sort=pushed`),
    ])

    const own = repos.filter((r) => !r.fork)

    const byteTotals = new Map<string, number>()
    const perRepo = await Promise.all(own.map((r) => gh<Record<string, number>>(r.languages_url).catch(() => ({}))))
    for (const langs of perRepo) {
      for (const [lang, bytes] of Object.entries(langs)) {
        byteTotals.set(lang, (byteTotals.get(lang) ?? 0) + bytes)
      }
    }
    const totalBytes = [...byteTotals.values()].reduce((a, b) => a + b, 0)
    const sorted = [...byteTotals.entries()].sort((a, b) => b[1] - a[1])
    const top = sorted.slice(0, MAX_LANGUAGES)
    const otherBytes = sorted.slice(MAX_LANGUAGES).reduce((a, [, b]) => a + b, 0)

    const languages: LanguageShare[] = totalBytes
      ? [
          ...top.map(([name, bytes]) => ({
            name,
            percent: (bytes / totalBytes) * 100,
            color: LANGUAGE_COLORS[name] ?? FALLBACK_COLOR,
          })),
          ...(otherBytes ? [{ name: "Other", percent: (otherBytes / totalBytes) * 100, color: FALLBACK_COLOR }] : []),
        ]
      : []

    return {
      publicRepos: user.public_repos,
      languageCount: byteTotals.size,
      followers: user.followers,
      languages,
    }
  } catch (err) {
    console.warn(`[github] stats unavailable, hiding section: ${(err as Error).message}`)
    return null
  }
}
