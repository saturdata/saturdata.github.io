"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { IDESidebar } from "@/components/ide-sidebar"
import { IDETabs } from "@/components/ide-tabs"
import { StatusBar } from "@/components/status-bar"
import {
  QueryEditor,
  SQLKeyword,
  SQLString,
  SQLFunction,
  SQLComment,
  LineNumber,
  SQLNumber,
} from "@/components/query-editor"
import { TypingAnimation } from "@/components/typing-animation"
import { ResultsTable } from "@/components/results-table"
import { HostCard } from "@/components/host-card"
import { EpisodeCard } from "@/components/episode-card"
import { Database, Table, Users, Mic, Youtube, Music, Coffee, Menu, X, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SaturdataContent } from "@/lib/content-data"

const tabs = [
  { id: "home", label: "welcome", icon: <Database className="h-3.5 w-3.5 text-primary" /> },
  { id: "hosts", label: "about", icon: <Users className="h-3.5 w-3.5 text-syntax-string" /> },
  { id: "episodes", label: "episodes", icon: <Mic className="h-3.5 w-3.5 text-syntax-function" /> },
  { id: "guests", label: "guest_appearances", icon: <Table className="h-3.5 w-3.5 text-syntax-number" /> },
]

export default function SaturdataPage() {
  const [activeSection, setActiveSection] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const isScrollingToSection = useRef(false)

  // Handle scroll spy - detect which section is currently visible
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      if (isScrollingToSection.current) return

      const scrollPosition = scrollContainer.scrollTop
      const containerHeight = scrollContainer.clientHeight

      // Find the section that's currently most visible in the viewport
      let currentSection = "home"
      let maxVisibility = 0

      for (const [sectionId, ref] of Object.entries(sectionRefs.current)) {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const containerRect = scrollContainer.getBoundingClientRect()
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(rect.top, containerRect.top)
          const visibleBottom = Math.min(rect.bottom, containerRect.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          
          // Use a threshold: section becomes active when it's at least 30% visible
          // or when its top is within the top 40% of the viewport
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
    // Also check on mount
    handleScroll()
    
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle clicking on tabs or sidebar to scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId]
    const scrollContainer = scrollContainerRef.current
    
    if (section && scrollContainer) {
      isScrollingToSection.current = true
      setActiveSection(sectionId)
      setSidebarOpen(false)

      // Smooth scroll to section
      section.scrollIntoView({ behavior: "smooth", block: "start" })

      // Detect when scrolling actually ends by checking if scroll position stabilizes
      let lastScrollTop = scrollContainer.scrollTop
      let scrollCheckCount = 0
      const maxChecks = 50 // Maximum 2.5 seconds (50 * 50ms)
      
      const checkScrollEnd = () => {
        if (!scrollContainer) {
          isScrollingToSection.current = false
          return
        }
        
        const currentScrollTop = scrollContainer.scrollTop
        
        // If scroll position hasn't changed, scrolling has ended
        if (Math.abs(currentScrollTop - lastScrollTop) < 1) {
          scrollCheckCount++
          // Wait for 2 consecutive stable checks to be sure
          if (scrollCheckCount >= 2) {
            isScrollingToSection.current = false
            return
          }
        } else {
          scrollCheckCount = 0
        }
        
        lastScrollTop = currentScrollTop
        
        // Continue checking if we haven't reached max checks
        if (scrollCheckCount < 2 && maxChecks > 0) {
          setTimeout(checkScrollEnd, 50)
        } else {
          isScrollingToSection.current = false
        }
      }
      
      // Start checking after a short delay
      setTimeout(checkScrollEnd, 50)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-sidebar">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm font-semibold">saturdata_db</span>
        </div>
        <button
          className="p-2 hover:bg-transparent transition-colors group"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          ) : (
            <Menu className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          )}
        </button>
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
          <IDETabs
            tabs={tabs}
            activeTab={activeSection}
            onTabChange={scrollToSection}
          />

          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-auto scroll-smooth"
          >
            <section
              id="home"
              ref={(el) => { sectionRefs.current.home = el }}
              className="min-h-screen py-6 px-4 md:px-6"
            >
              <HomeSection />
            </section>

            <section
              id="hosts"
              ref={(el) => { sectionRefs.current.hosts = el }}
              className="min-h-screen py-6 px-4 md:px-6"
            >
              <HostsSection />
            </section>

            <section
              id="episodes"
              ref={(el) => { sectionRefs.current.episodes = el }}
              className="min-h-screen py-6 px-4 md:px-6"
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
      <QueryEditor title="welcome.sql">
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
          className="border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Youtube className="h-8 w-8 text-destructive" />
            <div>
              <h3 className="font-semibold text-foreground">YouTube</h3>
              <p className="text-xs text-muted-foreground font-mono">Watch & subscribe</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Watch full episodes with video, tutorials, and visual explanations.
          </p>
        </a>

        <a 
          href="https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-border rounded-md bg-card py-8 px-6 hover:border-primary transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Music className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Spotify</h3>
              <p className="text-xs text-muted-foreground font-mono">Listen & follow</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Listen on the go with audio episodes perfect for your commute or morning routine.
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
            <div>
              <h3 className="font-semibold text-foreground">LinkedIn</h3>
              <p className="text-xs text-muted-foreground font-mono">Connect with us</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Follow Saturdata for updates, behind-the-scenes content, and community discussions.
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
            <div>
              <h3 className="font-semibold text-foreground">Support the show</h3>
              <p className="text-xs text-muted-foreground font-mono">Buy us a coffee</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Love the podcast? Buy us a coffee to help keep the data conversations going!
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
                imageUrl={episode.image}
              />
            ))}
            {comingSoon && (
              <EpisodeCard
                title={comingSoon.title}
                description={comingSoon.description}
                youtubeUrl={comingSoon.youtube_link}
                spotifyUrl={comingSoon.spotify_link}
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
          image="assets/images/about/saturdata_square.png"
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
            imageUrl={appearance.image}
          />
        ))}
      </div>
    </div>
  )
}

