"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { IDESidebar } from "@/components/ide-sidebar"
import { IDETabs } from "@/components/ide-tabs"
import { StatusBar } from "@/components/status-bar"
import {
  QueryEditor,
  SQLKeyword,
  SQLComment,
  LineNumber,
} from "@/components/query-editor"
import { TypingAnimation } from "@/components/typing-animation"
import { ResultsTable } from "@/components/results-table"
import { HostCard } from "@/components/host-card"
import { EpisodeCard } from "@/components/episode-card"
import { RssPlayerEmbed } from "@/components/rss-player-embed"
import { Database, Table, Users, Mic, Youtube, Music, Coffee, Linkedin, Mail, Menu, X, Podcast } from "lucide-react"
import { SaturdataContent } from "@/lib/content-data"
import { SECTION_TO_SLUG, SLUG_TO_SECTION } from "@/lib/sections"

const tabs = [
  { id: "home", label: "home", icon: <Database className="h-3.5 w-3.5 text-primary" /> },
  { id: "hosts", label: "about", icon: <Users className="h-3.5 w-3.5 text-syntax-string" /> },
  { id: "episodes", label: "episodes", icon: <Mic className="h-3.5 w-3.5 text-syntax-function" /> },
  { id: "guests", label: "guest_appearances", icon: <Table className="h-3.5 w-3.5 text-syntax-number" /> },
]

interface SaturdataPageProps {
  initialSection: string
}

export function SaturdataPage({ initialSection }: SaturdataPageProps) {
  const [activeSection, setActiveSection] = useState(initialSection)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const isScrollingToSection = useRef(initialSection !== "home")

  const scrollToSection = useCallback((sectionId: string, opts: { updateUrl?: boolean; behavior?: ScrollBehavior } = {}) => {
    const { updateUrl = true, behavior = "smooth" } = opts
    const section = sectionRefs.current[sectionId]
    const scrollContainer = scrollContainerRef.current

    if (!section || !scrollContainer) return

    isScrollingToSection.current = true
    setActiveSection(sectionId)
    setSidebarOpen(false)

    if (updateUrl) {
      const slug = SECTION_TO_SLUG[sectionId]
      if (slug && window.location.pathname !== `/${slug}/`) {
        window.history.pushState(null, "", `/${slug}/`)
      }
    }

    section.scrollIntoView({ behavior, block: "start" })

    let lastScrollTop = scrollContainer.scrollTop
    let scrollCheckCount = 0

    const checkScrollEnd = () => {
      if (!scrollContainer) {
        isScrollingToSection.current = false
        return
      }

      const currentScrollTop = scrollContainer.scrollTop

      if (Math.abs(currentScrollTop - lastScrollTop) < 1) {
        scrollCheckCount++
        if (scrollCheckCount >= 2) {
          isScrollingToSection.current = false
          return
        }
      } else {
        scrollCheckCount = 0
      }

      lastScrollTop = currentScrollTop
      setTimeout(checkScrollEnd, 50)
    }

    setTimeout(checkScrollEnd, 50)
  }, [])

  // Scroll spy: detect which section is currently visible
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      if (isScrollingToSection.current) return

      const scrollPosition = scrollContainer.scrollTop
      const containerHeight = scrollContainer.clientHeight

      let currentSection = "home"
      let maxVisibility = 0

      for (const [sectionId, ref] of Object.entries(sectionRefs.current)) {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const containerRect = scrollContainer.getBoundingClientRect()

          const visibleTop = Math.max(rect.top, containerRect.top)
          const visibleBottom = Math.min(rect.bottom, containerRect.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)

          const relativeTop = rect.top - containerRect.top
          const isInTopPortion = relativeTop < containerHeight * 0.4 && relativeTop > -rect.height * 0.6

          if (isInTopPortion && visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight
            currentSection = sectionId
          }
        }
      }

      setActiveSection(currentSection)
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  // Jump to the initial section on first paint (no animation, no URL change)
  useEffect(() => {
    if (initialSection === "home") return
    const section = sectionRefs.current[initialSection]
    if (section) {
      section.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" })
    }
    // Allow scroll spy to resume shortly after
    const id = setTimeout(() => {
      isScrollingToSection.current = false
    }, 100)
    return () => clearTimeout(id)
    // Run only once on mount; intentionally not depending on initialSection
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep URL in sync as the user scrolls between sections
  useEffect(() => {
    const slug = SECTION_TO_SLUG[activeSection]
    if (!slug) return
    const desiredPath = `/${slug}/`
    if (window.location.pathname !== desiredPath) {
      window.history.replaceState(null, "", desiredPath)
    }
  }, [activeSection])

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, "").replace(/\/$/, "")
      const section = SLUG_TO_SECTION[path] ?? "home"
      scrollToSection(section, { updateUrl: false })
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [scrollToSection])

  const activeTabLabel = tabs.find(t => t.id === activeSection)?.label ?? activeSection

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center gap-3 px-4 border-b border-border bg-sidebar" style={{ height: '44px', flexShrink: 0 }}>
        <button
          className="p-1 hover:bg-muted/50 rounded transition-colors text-muted-foreground flex items-center justify-center flex-shrink-0"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? (
            <X className="h-[18px] w-[18px]" />
          ) : (
            <Menu className="h-[18px] w-[18px]" />
          )}
        </button>
        <span className="font-mono text-[0.8rem] text-sidebar-foreground/80">
          saturdata_db / {activeTabLabel}.sql
        </span>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-background/80 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
            fixed lg:relative
            z-50 lg:z-auto
            h-full
            transition-transform duration-200
          `}
        >
          <IDESidebar
            activeSection={activeSection}
            onSectionChange={scrollToSection}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="hidden lg:block">
            <IDETabs
              tabs={tabs}
              activeTab={activeSection}
              onTabChange={scrollToSection}
            />
          </div>

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-auto scroll-smooth"
          >
            <section
              id="home"
              ref={(el) => { sectionRefs.current.home = el }}
              className="min-h-screen py-3 px-4 md:px-6"
            >
              <HomeSection />
            </section>

            <section
              id="hosts"
              ref={(el) => { sectionRefs.current.hosts = el }}
              className="min-h-screen py-3 px-4 md:px-6"
            >
              <HostsSection />
            </section>

            <section
              id="episodes"
              ref={(el) => { sectionRefs.current.episodes = el }}
              className="min-h-screen py-3 px-4 md:px-6"
            >
              <EpisodesSection />
            </section>

            <section
              id="guests"
              ref={(el) => { sectionRefs.current.guests = el }}
              className="min-h-screen py-6 px-4 md:px-6"
            >
              <GuestsSection />
            </section>
          </div>
        </main>
      </div>

      <StatusBar />
    </div>
  )
}

function HomeSection() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <QueryEditor title="home.sql">
        <TypingAnimation speed={40} />
      </QueryEditor>

      <ResultsTable
        title="Query results"
        rowCount={1}
        columns={[
          { key: "mission", label: "mission", type: "string", width: "52%" },
          { key: "schedule", label: "schedule", type: "string", width: "15%" },
          { key: "hosts", label: "hosts", type: "string", width: "33%" },
        ]}
        data={[
          {
            mission: "Humanizing the data world for the next generation",
            schedule: "Saturdays",
            hosts: "{Shifra Williams, Sam LaFell}",
          },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="https://www.youtube.com/@SaturdataPod"
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-2 border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="h-8 w-8 text-destructive" />
                <h3 className="font-semibold text-foreground">YouTube</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Watch full episodes with video, tutorials, and visual explanations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/assets/images/home/channel.png"
                alt="Saturdata YouTube channel preview"
                className="w-full h-auto rounded-md border border-border object-cover"
              />
            </div>
          </div>
        </a>

        <a
          href="https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo?si=783ac20bae724144"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Music className="h-8 w-8 text-primary" />
            <h3 className="font-semibold text-foreground">Spotify</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Listen on the go with audio episodes.
          </p>
        </a>

        <a
          href="https://podcasts.apple.com/us/podcast/saturdata/id1878774351"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Podcast className="h-8 w-8 text-purple-500" />
            <h3 className="font-semibold text-foreground">Apple Podcasts</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Listen on all of your Apple devices.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/company/saturdata/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Linkedin className="h-8 w-8 text-primary" />
            <h3 className="font-semibold text-foreground">LinkedIn</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Follow Saturdata for updates, behind-the-scenes content, and community discussions.
          </p>
        </a>

        <a
          href="https://github.com/saturdata/resources"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src="/assets/images/logos/github.webp" alt="GitHub" className="h-8 w-8 object-contain" />
            <h3 className="font-semibold text-foreground">GitHub</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Explore our learning resources and example code.
          </p>
        </a>

        <a
          href="https://buymeacoffee.com/saturdatapod"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Coffee className="h-8 w-8 text-syntax-number" />
            <h3 className="font-semibold text-foreground">Support the show</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Love the podcast? Buy us a coffee to help keep the data conversations going!
          </p>
        </a>

        <a
          href="mailto:saturdatapod@gmail.com"
          className="border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-8 w-8 text-sky-400" />
            <h3 className="font-semibold text-foreground">Email</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Reach out to us with your questions, guest pitches, and feedback.
          </p>
        </a>
      </div>
    </div>
  )
}

function EpisodesSection() {
  const allEpisodes = SaturdataContent.episodes.items

  const { season0Episodes, season1Episodes, comingSoon } = useMemo(() => {
    const now = new Date()
    const released = allEpisodes.filter(ep => ep.title !== 'More episodes coming soon' && (!ep.schedule_release || new Date(ep.schedule_release) <= now))
    const comingSoon = allEpisodes.find(ep => ep.title === 'More episodes coming soon')
    return {
      season0Episodes: released.filter(ep => ep.season === 0).reverse(),
      season1Episodes: released.filter(ep => ep.season === 1).sort((a, b) => {
        const aTime = a.schedule_release ? new Date(a.schedule_release).getTime() : 0
        const bTime = b.schedule_release ? new Date(b.schedule_release).getTime() : 0
        return bTime - aTime
      }),
      comingSoon,
    }
  }, [allEpisodes])

  const totalEpisodes = season0Episodes.length + season1Episodes.length

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <RssPlayerEmbed />

      <QueryEditor title="get_episodes.sql">
        <div className="space-y-1">
          <div>
            <LineNumber>{1}</LineNumber>
            <SQLKeyword>SELECT</SQLKeyword> title, description, youtube_url, spotify_url
          </div>
          <div>
            <LineNumber>{2}</LineNumber>
            <SQLKeyword>FROM</SQLKeyword> podcast.episodes
          </div>
          <div>
            <LineNumber>{3}</LineNumber>
            <SQLKeyword>ORDER BY</SQLKeyword> season, release_date <SQLKeyword>DESC</SQLKeyword>;
          </div>
        </div>
      </QueryEditor>

      <div className="text-xs text-muted-foreground font-mono px-1">
        -- {totalEpisodes} episodes returned
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-1">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Season 1</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {season1Episodes.map((episode) => (
              <EpisodeCard
                key={episode.title}
                title={episode.title}
                description={episode.description}
                youtubeUrl={episode.youtube_link}
                spotifyUrl={episode.spotify_link}
                appleUrl={episode.apple_link}
                imageUrl={episode.image}
              />
            ))}
            {comingSoon && (
              <EpisodeCard
                title={comingSoon.title}
                description={comingSoon.description}
                youtubeUrl={comingSoon.youtube_link}
                spotifyUrl={comingSoon.spotify_link}
                appleUrl={comingSoon.apple_link}
                imageUrl={comingSoon.image}
              />
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 px-1">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Season 0</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {season0Episodes.map((episode) => (
              <EpisodeCard
                key={episode.title}
                title={episode.title}
                description={episode.description}
                youtubeUrl={episode.youtube_link}
                spotifyUrl={episode.spotify_link}
                appleUrl={episode.apple_link}
                imageUrl={episode.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function HostsSection() {
  const hosts = SaturdataContent.about.items

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <QueryEditor title="get_crew.sql">
        <div className="space-y-1">
          <div>
            <LineNumber>{1}</LineNumber>
            <SQLKeyword>SELECT</SQLKeyword> name, pronouns, role, bio
          </div>
          <div>
            <LineNumber>{2}</LineNumber>
            <SQLKeyword>FROM</SQLKeyword> podcast.crew
          </div>
          <div>
            <LineNumber>{3}</LineNumber>
            <SQLKeyword>UNION ALL</SQLKeyword>
          </div>
          <div>
            <LineNumber>{4}</LineNumber>
            <SQLKeyword>SELECT</SQLKeyword> name, pronouns, role, bio
          </div>
          <div>
            <LineNumber>{5}</LineNumber>
            <SQLKeyword>FROM</SQLKeyword> podcast.production_team;
          </div>
        </div>
      </QueryEditor>

      <div className="text-xs text-muted-foreground font-mono px-1">
        -- {hosts.length} crew members returned
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {hosts.map((host) => (
          <HostCard
            key={host.name}
            name={host.name}
            pronouns={host.pronouns}
            role={host.title}
            bio={host.description}
            image={host.image}
            linkedinLink={host.linkedin_link}
            websiteLink={host.website_link}
          />
        ))}

        <HostCard
          name="Saturdata"
          pronouns=""
          role="Podcast"
          bio="Saturdata is the community-driven podcast humanizing the data world for the next generation of analysts, scientists, and engineers. Join hosts Shifra Williams and Sam LaFell every weekend as they break down both the career journey and the technical foundations that matter. <br></br> From navigating interviews to mastering SQL, Python, terminal basics, and understanding AI safety, Saturdata covers the full stack of becoming a successful data professional."
          image="/assets/images/about/saturdata_square.png"
          linkedinLink="https://www.linkedin.com/company/saturdata"
          websiteLink="https://saturdata.github.io"
        />
      </div>
    </div>
  )
}

function GuestsSection() {
  const appearances = SaturdataContent.appearances.items

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <QueryEditor title="get_guest_appearances.sql">
        <div className="space-y-1">
          <div>
            <LineNumber>{1}</LineNumber>
            <SQLComment>-- Episodes where our crew appeared as guests</SQLComment>
          </div>
          <div>
            <LineNumber>{2}</LineNumber>
            <SQLKeyword>SELECT</SQLKeyword> show_name, title, description
          </div>
          <div>
            <LineNumber>{3}</LineNumber>
            <SQLKeyword>FROM</SQLKeyword> podcast.guest_appearances
          </div>
          <div>
            <LineNumber>{4}</LineNumber>
            <SQLKeyword>WHERE</SQLKeyword> crew_id <SQLKeyword>IN</SQLKeyword> (
          </div>
          <div>
            <LineNumber>{5}</LineNumber>
            {"    "}<SQLKeyword>SELECT</SQLKeyword> id <SQLKeyword>FROM</SQLKeyword> podcast.crew
          </div>
          <div>
            <LineNumber>{6}</LineNumber>
            );
          </div>
        </div>
      </QueryEditor>

      <div className="text-xs text-muted-foreground font-mono px-1">
        -- {appearances.length} appearances returned
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {appearances.map((appearance) => (
          <EpisodeCard
            key={appearance.title}
            title={appearance.title}
            description={appearance.description}
            youtubeUrl={appearance.youtube_link}
            spotifyUrl={appearance.spotify_link}
            appleUrl={appearance.apple_link}
            imageUrl={appearance.image}
          />
        ))}
      </div>
    </div>
  )
}
