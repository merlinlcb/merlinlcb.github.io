import type React from "react"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Award as AwardIcon,
  Bot,
  Cloud,
  Github,
  Gitlab,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  Medal,
  MessageSquare,
  Network,
  Server,
  Shield,
  ShieldCheck,
  FolderGit2,
  Star,
  Trophy,
  Users,
} from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import { getGitHubStats, languageColor } from "@/lib/github"
import { awards, certifications, community, profile, strengths, type Award } from "@/content/site"

const awardIcons: Record<Award["icon"], typeof Medal> = {
  medal: Medal,
  bot: Bot,
  trophy: Trophy,
  star: Star,
  shield: Shield,
  heart: Heart,
}

const strengthIcons = { server: Server, network: Network, shield: ShieldCheck, cloud: Cloud }

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.links.github, icon: Github },
  { label: "GitLab", href: profile.links.gitlab, icon: Gitlab },
  { label: "Discord", href: profile.links.discord, icon: MessageSquare },
]

const nav = [
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
]

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-lg text-muted-foreground">{children}</p>}
    </div>
  )
}

function external(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}
}

export default async function Home() {
  const github = await getGitHubStats(profile.handle)
  const issuers = new Set(certifications.map((c) => c.issuer)).size
  const comptia = certifications.filter((c) => c.issuer === "CompTIA").length

  const stats = [
    { value: String(certifications.length), label: "Industry certifications" },
    { value: String(comptia), label: "CompTIA credentials" },
    { value: String(awards.length), label: "Awards & honors" },
    { value: "Sec+", label: "Security certified" },
  ]

  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            <span className="text-primary">{"<"}</span>
            {profile.handle}
            <span className="text-primary">{" />"}</span>
          </a>
          <nav className="flex items-center gap-1 sm:gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:inline-block"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative">
          <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
            aria-hidden
          />
          <div className="container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <ShieldCheck className="h-4 w-4" />
                {certifications.length}× certified · Linux · Networking · Security · Cloud
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-gradient">{profile.name}</span>
              </h1>
              <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-display text-lg font-medium text-muted-foreground sm:text-xl">
                {profile.roles.map((role, i) => (
                  <span key={role} className="flex items-center gap-3">
                    {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />}
                    {role}
                  </span>
                ))}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">{profile.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#certifications"
                  className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  View credentials
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...external(href)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-primary/5 to-cyan-500/30 blur-2xl" aria-hidden />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-primary/20 bg-card glow">
                <Image src="/me.png" alt={`Portrait of ${profile.name}`} fill priority className="object-cover" sizes="384px" />
              </div>
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border bg-card/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <AwardIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold leading-none">{certifications.length}</p>
                  <p className="text-xs text-muted-foreground">verified certifications</p>
                </div>
              </div>
              <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded-2xl border bg-card/90 px-3 py-2 shadow-xl backdrop-blur sm:-right-6">
                <Medal className="h-4 w-4 text-amber-500" />
                <p className="text-xs font-semibold">{awards[0]?.title}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="container pb-8">
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border bg-card/60 backdrop-blur md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 text-center ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-bold text-primary">{stat.value}</dd>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <section id="about" className="container py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionHeading eyebrow="About me" title="Front-line experience. Certified expertise." />
              <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
                {profile.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="grid gap-4 self-start sm:grid-cols-2">
              {strengths.map((s) => {
                const Icon = strengthIcons[s.icon]
                return (
                  <div
                    key={s.title}
                    className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="border-y bg-secondary/40 py-20">
          <div className="container">
            <SectionHeading eyebrow="Credentials" title={`${certifications.length} industry certifications`}>
              Independently verified credentials from {issuers > 1 ? `${issuers} issuers` : certifications[0]?.issuer}, spanning
              the full IT stack — from hardware and operating systems to networks, security, and the cloud. Click any badge
              to verify it on Credly.
            </SectionHeading>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col items-center rounded-2xl border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image}
                      alt={`${cert.fullName} badge`}
                      width={120}
                      height={120}
                      loading="lazy"
                      className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <p className="mt-4 font-display font-semibold">{cert.name}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{cert.fullName}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-medium text-primary opacity-70 transition-opacity group-hover:opacity-100">
                      Verify <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Awards & Community */}
        <section id="awards" className="container py-20">
          <SectionHeading eyebrow="Recognition" title="Awards & honors" />
          <div className="grid gap-4 md:grid-cols-3">
            {awards.map((award) => {
              const Icon = awardIcons[award.icon] ?? Star
              return (
                <div key={award.title} className="relative overflow-hidden rounded-2xl border bg-card p-6">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl" aria-hidden />
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300/30 to-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{award.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{award.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Giving back" title="Community" />
            <div className="grid gap-4 md:grid-cols-2">
              {community.map((item, i) => {
                const Icon = i === 0 ? Users : GraduationCap
                const body = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="flex items-center gap-1 font-display text-lg font-semibold">
                        {item.title}
                        {item.url && <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </>
                )
                const cls = "group flex gap-4 rounded-2xl border bg-card p-6 transition-colors"
                return item.url ? (
                  <a key={item.title} href={item.url} {...external(item.url)} className={`${cls} hover:border-primary/40`}>
                    {body}
                  </a>
                ) : (
                  <div key={item.title} className={cls}>
                    {body}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* GitHub — stats are fetched from the GitHub API at build time (lib/github.ts) */}
        {github && (
          <section className="container pb-20">
            <SectionHeading eyebrow="Open source" title="On GitHub" />
            <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
              <div className="flex flex-col gap-4">
                <dl className="grid grid-cols-3 overflow-hidden rounded-2xl border bg-card">
                  {[
                    { label: "Public repos", value: github.publicRepos },
                    { label: "Languages", value: github.languageCount },
                    { label: "Followers", value: github.followers },
                  ].map((s, i) => (
                    <div key={s.label} className={`p-5 text-center ${i > 0 ? "border-l" : ""}`}>
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="font-display text-2xl font-bold text-primary">{s.value}</dd>
                      <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                    </div>
                  ))}
                </dl>
                {github.languages.length > 0 && (
                  <div className="flex-1 rounded-2xl border bg-card p-6">
                    <h3 className="mb-4 font-display font-semibold">Top languages</h3>
                    <div className="flex h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden>
                      {github.languages.map((l) => (
                        <span key={l.name} style={{ width: `${l.percent}%`, backgroundColor: l.color }} />
                      ))}
                    </div>
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      {github.languages.map((l) => (
                        <li key={l.name} className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: l.color }} aria-hidden />
                          <span className="truncate">{l.name}</span>
                          <span className="ml-auto tabular-nums text-muted-foreground">{l.percent.toFixed(1)}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {github.recent.map((repo) => (
                  <li key={repo.name}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                    >
                      <span className="flex items-center gap-2 font-display font-semibold">
                        <FolderGit2 className="h-4 w-4 shrink-0 text-primary" />
                        <span className="truncate">{repo.name}</span>
                        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                      </span>
                      <span className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {repo.description ?? "No description yet."}
                      </span>
                      <span className="mt-auto flex items-center gap-4 pt-4 text-xs text-muted-foreground">
                        {repo.language && (
                          <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: languageColor(repo.language) }} aria-hidden />
                            {repo.language}
                          </span>
                        )}
                        {repo.stars > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" /> {repo.stars}
                          </span>
                        )}
                        <span className="ml-auto">
                          Updated {new Date(repo.pushedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Contact */}
        <section id="contact" className="container pb-24">
          <div className="relative overflow-hidden rounded-3xl border bg-card px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-cyan-500/10" aria-hidden />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s work together</h2>
              <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
                Looking for someone who can keep your systems secure, your network healthy, and your users happy? I&apos;d
                love to hear from you.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {socials.slice(1).map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    {...external(href)}
                    className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-display">{profile.roles.join(" · ")}</p>
        </div>
      </footer>
    </div>
  )
}
