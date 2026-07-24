import { useEffect, useMemo, useState } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink,
  Home,
  User,
  Briefcase,
  FolderKanban,
  Sun,
  Moon,
} from 'lucide-react'
import Aurora from './components/Aurora'
import SplitText from './components/SplitText'
import BlurText from './components/BlurText'
import RotatingText from './components/RotatingText'
import SpotlightCard from './components/SpotlightCard'
import ScrollReveal from './components/ScrollReveal'
import ShinyText from './components/ShinyText'
import CountUp from './components/CountUp'
import Dock from './components/Dock'
import GradientText from './components/GradientText'
import TrueFocus from './components/TrueFocus'
import FadeContent from './components/FadeContent'
import StarBorder from './components/StarBorder'
import ClickSpark from './components/ClickSpark'

const PROFILE = {
  name: 'Adrian Akbar Ramadhani',
  short: 'Adrian Akbar',
  role: 'Full-stack Developer',
  campus: 'Universitas Jember',
  semester: 'Mahasiswa Teknologi Informasi',
  email: 'armojkece123@gmail.com',
  github: 'https://github.com/adrianakbar',
  linkedin: 'https://www.linkedin.com/in/adrianakbarramadhani/',
  instagram: 'https://instagram.com/adrianakbar._.r',
  about:
    'Saya mahasiswa Teknologi Informasi di Universitas Jember dengan fokus full-stack development untuk web dan mobile. Saya senang membangun produk nyata: landing page bisnis, sistem informasi, dan aplikasi Flutter. Saat ini mengerjakan skripsi sistem koperasi Karya Tantri Abadi.',
}

const PROJECTS = [
  {
    title: 'Kos Buwatik',
    blurb: 'Landing page branding kos dengan gaya hospitality, CTA WhatsApp, dan gallery fasilitas.',
    tags: ['HTML', 'Tailwind', 'Vercel'],
    logos: ['html5', 'tailwindcss', 'vercel'],
    href: 'https://kosbuwatik.vercel.app',
    repo: 'https://github.com/adrianakbar/KosBuwatik',
    type: 'Web',
  },
  {
    title: 'Karya Tantri Abadi',
    blurb: 'Sistem informasi koperasi simpan pinjam (skripsi) dengan alur pinjaman kelompok, fee, dan laporan.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    logos: ['laravel', 'php', 'mysql'],
    href: 'https://github.com/adrianakbar/karya_tantri_abadi',
    repo: 'https://github.com/adrianakbar/karya_tantri_abadi',
    type: 'System',
  },
  {
    title: 'Uangku',
    blurb: 'Aplikasi mobile untuk pencatatan keuangan pribadi.',
    tags: ['Flutter', 'Dart'],
    logos: ['flutter', 'dart'],
    href: 'https://github.com/adrianakbar/uangku',
    repo: 'https://github.com/adrianakbar/uangku',
    type: 'Mobile',
  },
  {
    title: 'ReviewBisnisku',
    blurb: 'Website review bisnis lokal untuk membantu UMKM tampil terpercaya.',
    tags: ['HTML', 'CSS'],
    logos: ['html5', 'css'],
    href: 'https://github.com/adrianakbar/reviewbisnisku',
    repo: 'https://github.com/adrianakbar/reviewbisnisku',
    type: 'Web',
  },
  {
    title: 'PawCare',
    blurb: 'Website klinik hewan dengan fitur deteksi untuk admin.',
    tags: ['Laravel', 'Blade'],
    logos: ['laravel', 'php'],
    href: 'https://github.com/adrianakbar/PawCare',
    repo: 'https://github.com/adrianakbar/PawCare',
    type: 'Web',
  },
  {
    title: 'SIKA',
    blurb: 'Sistem Izin Kerja Aman untuk manajemen perizinan kerja.',
    tags: ['JavaScript'],
    logos: ['javascript'],
    href: 'https://github.com/adrianakbar/sika',
    repo: 'https://github.com/adrianakbar/sika',
    type: 'System',
  },
  {
    title: 'Gentengan Badminton',
    blurb: 'Landing page branding gedung olahraga bulutangkis.',
    tags: ['HTML', 'CSS'],
    logos: ['html5', 'css'],
    href: 'https://github.com/adrianakbar/GentenganBadminton',
    repo: 'https://github.com/adrianakbar/GentenganBadminton',
    type: 'Web',
  },
  {
    title: 'HidroControl',
    blurb: 'Aplikasi mobile monitoring hidroponik.',
    tags: ['Flutter', 'IoT'],
    logos: ['flutter', 'dart'],
    href: 'https://github.com/adrianakbar/HidroControl',
    repo: 'https://github.com/adrianakbar/HidroControl',
    type: 'Mobile',
  },
]

/** Brand logos via Simple Icons CDN */
const LOGO: Record<string, { slug: string; color: string; label: string }> = {
  laravel: { slug: 'laravel', color: 'FF2D20', label: 'Laravel' },
  php: { slug: 'php', color: '777BB4', label: 'PHP' },
  react: { slug: 'react', color: '61DAFB', label: 'React' },
  nextdotjs: { slug: 'nextdotjs', color: 'FFFFFF', label: 'Next.js' },
  flutter: { slug: 'flutter', color: '02569B', label: 'Flutter' },
  dart: { slug: 'dart', color: '0175C2', label: 'Dart' },
  mysql: { slug: 'mysql', color: '4479A1', label: 'MySQL' },
  prisma: { slug: 'prisma', color: 'FFFFFF', label: 'Prisma' },
  tailwindcss: { slug: 'tailwindcss', color: '06B6D4', label: 'Tailwind CSS' },
  typescript: { slug: 'typescript', color: '3178C6', label: 'TypeScript' },
  javascript: { slug: 'javascript', color: 'F7DF1E', label: 'JavaScript' },
  vite: { slug: 'vite', color: '646CFF', label: 'Vite' },
  git: { slug: 'git', color: 'F05032', label: 'Git' },
  github: { slug: 'github', color: 'FFFFFF', label: 'GitHub' },
  figma: { slug: 'figma', color: 'F24E1E', label: 'Figma' },
  nodedotjs: { slug: 'nodedotjs', color: '5FA04E', label: 'Node.js' },
  html5: { slug: 'html5', color: 'E34F26', label: 'HTML5' },
  css: { slug: 'css', color: '663399', label: 'CSS' },
  vercel: { slug: 'vercel', color: 'FFFFFF', label: 'Vercel' },
}

const SKILLS = [
  { key: 'laravel', desc: 'Backend & REST API' },
  { key: 'php', desc: 'Server-side scripting' },
  { key: 'react', desc: 'SPA & component UI' },
  { key: 'nextdotjs', desc: 'Full-stack React' },
  { key: 'flutter', desc: 'Cross-platform apps' },
  { key: 'dart', desc: 'Flutter language' },
  { key: 'mysql', desc: 'Relational database' },
  { key: 'prisma', desc: 'Type-safe ORM' },
  { key: 'tailwindcss', desc: 'Utility-first CSS' },
  { key: 'typescript', desc: 'Typed JavaScript' },
  { key: 'vite', desc: 'Frontend tooling' },
  { key: 'figma', desc: 'UI design' },
  { key: 'git', desc: 'Version control' },
  { key: 'github', desc: 'Collaboration' },
  { key: 'nodedotjs', desc: 'JS runtime' },
  { key: 'html5', desc: 'Web markup' },
]

function BrandLogo({
  slug,
  color,
  label,
  size = 28,
}: {
  slug: string
  color: string
  label: string
  size?: number
}) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt={label}
      width={size}
      height={size}
      className="h-7 w-7 object-contain"
      loading="lazy"
      decoding="async"
    />
  )
}

const STATS = [
  { label: 'Public Repos', value: 25 },
  { label: 'Web Projects', value: 10 },
  { label: 'Mobile Apps', value: 6 },
  { label: 'Years Learning', value: 4 },
]

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <ShinyText text={kicker} className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]" speed={3} />
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
        <GradientText colors={['#5eead4', '#a78bfa', '#5eead4']} animationSpeed={6} className="inline-block">
          {title}
        </GradientText>
      </h2>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document === 'undefined') return 'dark'
    const current = document.documentElement.getAttribute('data-theme')
    return current === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const dockItems = useMemo(
    () => [
      {
        icon: <Home className="h-5 w-5 text-[var(--color-text)]" />,
        label: 'Home',
        onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        icon: <User className="h-5 w-5 text-[var(--color-text)]" />,
        label: 'About',
        onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        icon: <Briefcase className="h-5 w-5 text-[var(--color-text)]" />,
        label: 'Skills',
        onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        icon: <FolderKanban className="h-5 w-5 text-[var(--color-text)]" />,
        label: 'Projects',
        onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        icon: <Mail className="h-5 w-5 text-[var(--color-text)]" />,
        label: 'Contact',
        onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        icon: theme === 'dark' ? <Sun className="h-5 w-5 text-[var(--color-text)]" /> : <Moon className="h-5 w-5 text-[var(--color-text)]" />,
        label: theme === 'dark' ? 'Light' : 'Dark',
        onClick: toggleTheme,
      },
    ],
    [theme],
  )

  const logoColor = (key: string, fallback: string) => {
    if (theme === 'light' && (key === 'github' || key === 'vercel' || key === 'nextdotjs' || key === 'prisma')) {
      return '111827'
    }
    return fallback
  }

  return (
    <ClickSpark sparkColor={theme === 'dark' ? '#5eead4' : '#0f766e'} sparkSize={8} sparkRadius={18} sparkCount={10} duration={450}>
      <div className="relative min-h-dvh overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
        <div className={`pointer-events-none fixed inset-0 z-0 ${theme === 'light' ? 'opacity-35' : 'opacity-70'}`}>
          <Aurora
            colorStops={theme === 'light' ? ['#99f6e4', '#c4b5fd', '#7dd3fc'] : ['#5eead4', '#a78bfa', '#22d3ee']}
            blend={theme === 'light' ? 0.35 : 0.55}
            amplitude={0.9}
            speed={0.55}
          />
        </div>
        <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/40 to-[var(--color-bg)]" />

        <header className="relative z-20">
          <div className="section flex items-center justify-between py-5">
            <a href="#home" className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
              <img
                src="/adrian-avatar.jpg"
                alt={PROFILE.short}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-[var(--color-accent)]/40"
              />
              <span>
                adrian<span className="text-[var(--color-accent)]">.dev</span>
              </span>
            </a>
            <nav className="hidden items-center gap-7 text-sm text-[var(--color-muted)] md:flex">
              {[
                ['About', '#about'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a key={href} href={href} className="transition hover:text-[var(--color-text)]">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <StarBorder as="a" href={PROFILE.github} className="text-sm" color={theme === 'dark' ? '#5eead4' : '#0f766e'} speed="6s">
                GitHub
              </StarBorder>
            </div>
          </div>
        </header>

        <section id="home" className="relative z-10 flex min-h-[88dvh] items-center pb-16 pt-8">
          <div className="section grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <FadeContent blur duration={700} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-3 py-1.5 text-xs text-[var(--color-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                {PROFILE.semester} · {PROFILE.campus}
              </FadeContent>

              <SplitText
                text={`Hi, I'm ${PROFILE.short}`}
                className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl"
                delay={40}
                duration={0.7}
                splitType="chars"
                from={{ opacity: 0, y: 28 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-40px"
                textAlign="left"
                tag="h1"
              />

              <div className="mt-4 flex flex-wrap items-center gap-3 text-lg text-[var(--color-muted)] md:text-xl">
                <span>I build</span>
                <RotatingText
                  texts={['web apps', 'mobile apps', 'landing pages', 'coop systems', 'UI that converts']}
                  mainClassName="overflow-hidden rounded-lg bg-[var(--color-surface-2)] px-3 py-1 font-medium text-[var(--color-accent)]"
                  staggerFrom="last"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.02}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                  rotationInterval={2200}
                />
              </div>

              <BlurText
                text="Full-stack developer focused on clean products, practical UI, and real business impact."
                className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
                delay={30}
                animateBy="words"
                direction="top"
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-btn-on-accent)] transition hover:brightness-110"
                >
                  Lihat Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-soft)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-soft-2)]"
                >
                  Hubungi Saya
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 text-[var(--color-muted)]">
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-text)]" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-text)]" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={PROFILE.instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--color-text)]" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={`mailto:${PROFILE.email}`} className="hover:text-[var(--color-text)]" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <FadeContent delay={200} duration={800}>
                <div className="relative mx-auto w-full max-w-md">
                  <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--color-accent)]/30 via-transparent to-[var(--color-accent-2)]/25 blur-2xl" />
                  <div className="card-surface relative overflow-hidden rounded-[1.75rem] p-3">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                      <img
                        src="/adrian.jpg"
                        alt={PROFILE.name}
                        className="h-full w-full object-cover object-[center_18%]"
                        loading="eager"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{PROFILE.name}</p>
                        <p className="text-sm text-white/75">{PROFILE.role} · {PROFILE.campus}</p>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 px-1 pb-1">
                      {STATS.slice(0, 4).map((s) => (
                        <div key={s.label} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-overlay)] p-3">
                          <div className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-accent)]">
                            <CountUp to={s.value} duration={1.6} className="inline" />
                            +
                          </div>
                          <div className="mt-1 text-[11px] text-[var(--color-muted)]">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 card-surface p-4">
                    <TrueFocus
                      sentence="Build. Ship. Iterate."
                      borderColor="#5eead4"
                      glowColor="rgba(94,234,212,0.45)"
                      blurAmount={4}
                      animationDuration={0.45}
                      pauseBetweenAnimations={1.1}
                    />
                  </div>
                </div>
              </FadeContent>
            </div>
          </div>
        </section>

        <section id="about" className="relative z-10 py-20">
          <div className="section">
            <SectionTitle kicker="About" title="Siapa Saya" />
            <div className="mx-auto max-w-3xl">
              <ScrollReveal baseOpacity={0.15} enableBlur baseRotation={2} blurStrength={5} textClassName="text-center text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
                {PROFILE.about}
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="skills" className="relative z-10 py-16">
          <div className="section">
            <SectionTitle kicker="Stack" title="Skills & Tools" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {SKILLS.map((skill, i) => {
                const logo = LOGO[skill.key]
                if (!logo) return null
                return (
                  <FadeContent key={skill.key} delay={i * 40} duration={550}>
                    <SpotlightCard className="card-surface h-full p-4" spotlightColor="rgba(94, 234, 212, 0.16)">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-soft)]">
                          <BrandLogo slug={logo.slug} color={logoColor(skill.key, logo.color)} label={logo.label} />
                        </div>
                        <div className="min-w-0">
                          <div className="truncate font-medium leading-tight">{logo.label}</div>
                          <div className="mt-0.5 truncate text-xs text-[var(--color-muted)]">{skill.desc}</div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </FadeContent>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="relative z-10 py-20">
          <div className="section">
            <SectionTitle kicker="Selected Work" title="Projects" />
            <div className="grid gap-5 md:grid-cols-2">
              {PROJECTS.map((p, i) => (
                <FadeContent key={p.title} delay={i * 50} duration={650}>
                  <SpotlightCard className="card-surface min-h-[220px] p-5" spotlightColor="rgba(167, 139, 250, 0.22)">
                    <div className="flex h-full min-h-[190px] flex-col justify-between">
                      <div>
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-[11px] uppercase tracking-wide text-[var(--color-muted)]">
                            {p.type}
                          </span>
                          <div className="flex gap-2">
                            <a href={p.repo} target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-text)]" aria-label={`${p.title} repo`}>
                              <Github className="h-4 w-4" />
                            </a>
                            <a href={p.href} target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-text)]" aria-label={`${p.title} live`}>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">{p.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{p.blurb}</p>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {p.logos.map((key) => {
                          const logo = LOGO[key]
                          if (!logo) return null
                          return (
                            <span
                              key={key}
                              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-soft)] px-2 py-1 text-xs text-[var(--color-muted)]"
                              title={logo.label}
                            >
                              <img
                                src={`https://cdn.simpleicons.org/${logo.slug}/${logoColor(key, logo.color)}`}
                                alt={logo.label}
                                className="h-3.5 w-3.5 object-contain"
                                loading="lazy"
                              />
                              {logo.label}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </SpotlightCard>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative z-10 py-20">
          <div className="section">
            <SectionTitle kicker="Contact" title="Let's work together" />
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-8 text-[var(--color-muted)]">
                Open for freelance landing page, sistem informasi, dan kolaborasi project. Langsung chat via email atau LinkedIn.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-btn-on-accent)] transition hover:brightness-110"
                >
                  <Mail className="h-4 w-4" /> Email Me
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-soft)] px-5 py-2.5 text-sm font-medium transition hover:bg-[var(--color-soft-2)]"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-soft)] px-5 py-2.5 text-sm font-medium transition hover:bg-[var(--color-soft-2)]"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 border-t border-[var(--color-border)]/60 py-8">
          <div className="section flex flex-col items-center justify-between gap-3 text-sm text-[var(--color-muted)] md:flex-row">
            <span>
              © {new Date().getFullYear()} {PROFILE.name}
            </span>
            <span className="text-xs">Built with React Bits · Vite · Tailwind</span>
          </div>
        </footer>

        <div className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2">
          <Dock items={dockItems} panelHeight={68} baseItemSize={44} magnification={62} />
        </div>
      </div>
    </ClickSpark>
  )
}
