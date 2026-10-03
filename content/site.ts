/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — this is the only file you need to touch for routine updates.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Adding a new certification:
 *    1. Open your badge on Credly and copy the public share link (`url`).
 *    2. Right-click the badge image → "Copy image address" (`image`).
 *    3. Paste a new entry at the TOP of `certifications` below.
 *    4. Commit to `master` (the GitHub web editor is fine). GitHub Actions
 *       builds and deploys the site automatically in ~1 minute.
 *
 *  The certification count shown in the hero updates itself.
 */

export type Certification = {
  /** Short label shown under the badge, e.g. "Security+" */
  name: string
  /** Full official name, shown as the subtitle */
  fullName: string
  issuer: string
  /** Public verification link (Credly share URL) */
  url: string
  /** Badge image URL */
  image: string
  /** Optional: year earned, e.g. "2025" */
  year?: string
}

export type Award = {
  title: string
  description: string
  /** Icon name — one of: "medal", "bot", "trophy", "star", "shield", "heart" */
  icon: "medal" | "bot" | "trophy" | "star" | "shield" | "heart"
}

export const profile = {
  name: "Lehi Bennett",
  handle: "merlinlcb",
  roles: ["Systems Administrator", "IT Professional", "UI/UX Developer"],
  tagline:
    "I keep systems running, networks secure, and users happy — and I build clean interfaces on top of it all.",
  about: [
    "I'm an IT professional with a foundation in Computer Information Systems and hands-on experience in telecommunications. I've worked every layer of the support stack — from customer care specialist to repair service attendant — and that front-line experience taught me to diagnose fast, communicate clearly, and fix problems so they stay fixed.",
    "I back that experience with a deep bench of industry credentials across Linux, networking, security, and cloud, plus multiple CompTIA stackable specialist and professional certifications. Whether it's hardening infrastructure or polishing a UI, I care about doing the job right.",
  ],
  email: "merlinlcb@duck.com",
  links: {
    linkedin: "https://www.linkedin.com/in/merlinlcb/",
    github: "https://github.com/merlinlcb",
    gitlab: "https://gitlab.com/merlinlcb",
    discord: "https://discordapp.com/users/165947063350198272",
  },
}

/** Areas of strength, shown as cards under "What I bring". */
export const strengths = [
  {
    title: "Systems & Infrastructure",
    description: "Linux administration, hardware, and operating systems — certified across A+, LFS101, and CompTIA IT Operations Specialist.",
    icon: "server",
  },
  {
    title: "Networking",
    description: "Designing, troubleshooting, and maintaining networks, grounded in Network+ and real-world telecom experience.",
    icon: "network",
  },
  {
    title: "Security",
    description: "Security+ certified with Secure Infrastructure Specialist and Secure Cloud Professional credentials.",
    icon: "shield",
  },
  {
    title: "Cloud",
    description: "Cloud+ certified, with CompTIA Cloud Admin Professional recognition for running workloads in the cloud.",
    icon: "cloud",
  },
] as const

/** Community involvement. */
export const community = [
  {
    title: "Volunteer at Clevoro",
    description: "Contributing time and technical know-how to the Clevoro community.",
    url: "https://discord.gg/clevoro-729943368364326952",
  },
  {
    title: "STEM Educator",
    description: "Teaching STEM workshops at public libraries and helping the next generation get excited about technology.",
  },
]

export const awards: Award[] = [
  {
    title: "Eagle Scout",
    description: "The highest rank in Scouting — earned by only a small fraction of Scouts through leadership, service, and a community project.",
    icon: "medal",
  },
  {
    title: "Excellence in Robotics",
    description: "Recognized for standout achievement in robotics — engineering, programming, and creative problem-solving.",
    icon: "bot",
  },
  {
    title: "Operational Excellence",
    description: "Recognized on the job for consistently high performance, reliability, and service quality.",
    icon: "trophy",
  },
]

// Newest first.
export const certifications: Certification[] = [
  {
    name: "CCAP",
    fullName: "CompTIA Cloud Admin Professional",
    issuer: "CompTIA",
    // NOTE: this link is identical to the Cloud+ one below — swap in the CCAP share link from Credly.
    url: "https://www.credly.com/badges/e709af35-8564-4376-b1f3-3f57dbfa48ba/public_url",
    image: "https://images.credly.com/size/340x340/images/18218ce6-e7d4-4479-9500-b7499645b763/CompTIA_CCAP.png",
  },
  {
    name: "CSCP",
    fullName: "CompTIA Secure Cloud Professional",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/841f01dd-d646-4743-819e-7e53d591cddf/public_url",
    image: "https://images.credly.com/size/340x340/images/9f54bf46-dc18-408c-a74e-2637facd1856/CompTIA_CSCP.png",
  },
  {
    name: "Cloud+",
    fullName: "CompTIA Cloud+",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/e709af35-8564-4376-b1f3-3f57dbfa48ba/public_url",
    image: "https://images.credly.com/size/340x340/images/b2e3c623-cc4a-4f0c-8a3b-aa6231e138fe/blob",
  },
  {
    name: "CSIS",
    fullName: "CompTIA Secure Infrastructure Specialist",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/782aa29e-9a96-4a61-9037-efa849c2eeef/public_url",
    image: "https://images.credly.com/size/340x340/images/8090280a-311f-425f-a1cd-a32770b5a444/CompTIA_CSIS.png",
  },
  {
    name: "Security+",
    fullName: "CompTIA Security+",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/1e2a0ec9-f1d8-43fe-bbfc-d6094352a378/public_url",
    image: "https://images.credly.com/size/340x340/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
  },
  {
    name: "CIOS",
    fullName: "CompTIA IT Operations Specialist",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/24f29e8b-ecbe-4405-a943-48d86c45252d/public_url",
    image: "https://images.credly.com/size/340x340/images/7f7657b9-4d1b-4b8d-b5ee-5fdf6d7ccd71/04294_CompTIA_Cert_Badges_Specialist_-_CIOS.png",
  },
  {
    name: "Network+",
    fullName: "CompTIA Network+",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/4709d799-faa3-4f71-8439-093fe2c2faaa/public_url",
    image: "https://images.credly.com/size/340x340/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/blob",
  },
  {
    name: "A+",
    fullName: "CompTIA A+",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/84182abf-a6db-4e1d-85f9-30a01edc1911/public_url",
    image: "https://images.credly.com/size/340x340/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/blob",
  },
  {
    name: "ITF+",
    fullName: "CompTIA IT Fundamentals+",
    issuer: "CompTIA",
    url: "https://www.credly.com/badges/310834d5-0fd8-4940-a633-13f3b0192ebd/public_url",
    image: "https://images.credly.com/size/340x340/images/a49be93a-34ff-4224-996c-b2c976a5dc9d/blob",
  },
  {
    name: "LFS101",
    fullName: "Introduction to Linux",
    issuer: "The Linux Foundation",
    url: "https://www.credly.com/badges/fd9b4d50-5e18-40fe-aa25-641dd68e7a30/public_url",
    image: "https://images.credly.com/size/340x340/images/97a95d07-04c3-4afb-952a-6bcf46ddb87e/blob",
  },
]
