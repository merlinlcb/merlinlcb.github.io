/**
 * Pulls GitHub stats at build time (no third-party services, nothing fetched
 * in the visitor's browser). The deploy workflow rebuilds weekly so the
 * numbers stay fresh.
 *
 * With STATS_TOKEN (a read-only token for the account) private repos are
 * counted and their languages included; only totals are published, never repo
 * names. Without it, falls back to public repos via GITHUB_TOKEN.
 *
 * If the API is unreachable the function returns null and the page simply
 * hides the GitHub section instead of failing the build.
 */

export type LanguageShare = { name: string; percent: number; color: string }

export type GitHubStats = {
  publicRepos: number
  /** null when no STATS_TOKEN was available, so private repos can't be seen */
  privateRepos: number | null
  languageCount: number
  languages: LanguageShare[]
}

type ApiRepo = {
  name: string
  fork: boolean
  private: boolean
  owner: { login: string }
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

const STATS_TOKEN = process.env.STATS_TOKEN
const TOKEN = STATS_TOKEN || process.env.GITHUB_TOKEN

async function gh<T>(path: string): Promise<T> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  }
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`

  const url = path.startsWith("http") ? path : `https://api.github.com${path}`
  const res = await fetch(url, { headers, cache: "force-cache" })
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${url}`)
  return res.json() as Promise<T>
}

async function allPages<T>(path: string): Promise<T[]> {
  const out: T[] = []
  for (let page = 1; ; page++) {
    const batch = await gh<T[]>(`${path}${path.includes("?") ? "&" : "?"}per_page=100&page=${page}`)
    out.push(...batch)
    if (batch.length < 100) return out
  }
}

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    // /user/repos (authenticated) is the only listing that includes private repos.
    const repos = STATS_TOKEN
      ? (await allPages<ApiRepo>(`/user/repos?affiliation=owner&visibility=all`)).filter(
          (r) => r.owner.login.toLowerCase() === username.toLowerCase(),
        )
      : await allPages<ApiRepo>(`/users/${username}/repos?type=owner`)

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
      publicRepos: repos.filter((r) => !r.private).length,
      privateRepos: STATS_TOKEN ? repos.filter((r) => r.private).length : null,
      languageCount: byteTotals.size,
      languages,
    }
  } catch (err) {
    console.warn(`[github] stats unavailable, hiding section: ${(err as Error).message}`)
    return null
  }
}
