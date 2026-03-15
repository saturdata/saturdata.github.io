"use client"

import React from "react"

import { useState } from "react"
import {
  Database,
  Table,
  Users,
  Headphones,
  Mic,
  Play,
  ChevronDown,
  ChevronRight,
  Youtube,
  Music,
  Coffee,
  Linkedin,
  Podcast,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TreeItemProps {
  icon: React.ReactNode
  label: string
  children?: React.ReactNode
  defaultOpen?: boolean
  active?: boolean
  onClick?: () => void
}

function TreeItem({ icon, label, children, defaultOpen = false, active, onClick }: TreeItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div>
      <button
        onClick={() => {
          if (children) setIsOpen(!isOpen)
          onClick?.()
        }}
        className={cn(
          "flex w-full items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted rounded transition-colors",
          active && "bg-muted text-primary"
        )}
      >
        {children ? (
          isOpen ? (
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
          )
        ) : (
          <span className="w-3" />
        )}
        {icon}
        <span className="truncate">{label}</span>
      </button>
      {isOpen && children && <div className="ml-4">{children}</div>}
    </div>
  )
}

interface IDESidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function IDESidebar({ activeSection, onSectionChange }: IDESidebarProps) {
  return (
    <aside className="w-72 border-r border-border bg-sidebar flex flex-col h-full">
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm font-semibold">saturdata_db</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-2">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-2">
          Explorer
        </div>

        <TreeItem
          icon={<Play className="h-4 w-4 text-syntax-keyword" />}
          label="queries"
          defaultOpen
        >
          <TreeItem
            icon={<span className="text-xs text-muted-foreground font-mono">SQL</span>}
            label="home.sql"
            active={activeSection === "home"}
            onClick={() => onSectionChange("home")}
          />
          <TreeItem
            icon={<span className="text-xs text-muted-foreground font-mono">SQL</span>}
            label="get_crew_info.sql"
            active={activeSection === "hosts"}
            onClick={() => onSectionChange("hosts")}
          />
          <TreeItem
            icon={<span className="text-xs text-muted-foreground font-mono">SQL</span>}
            label="get_episodes.sql"
            active={activeSection === "episodes"}
            onClick={() => onSectionChange("episodes")}
          />
          <TreeItem
            icon={<span className="text-xs text-muted-foreground font-mono">SQL</span>}
            label="get_guest_appearances.sql"
            active={activeSection === "guests"}
            onClick={() => onSectionChange("guests")}
          />
        </TreeItem>

        <TreeItem
          icon={<Headphones className="h-4 w-4 text-syntax-keyword" />}
          label="platforms"
          defaultOpen
        >
          <TreeItem
            icon={<Youtube className="h-4 w-4 text-destructive" />}
            label="youtube"
            onClick={() => window.open("https://www.youtube.com/@saturdatapod", "_blank")}
          />
          <TreeItem
            icon={<Music className="h-4 w-4 text-primary" />}
            label="spotify"
            onClick={() => window.open("https://open.spotify.com/show/5QolhKm1jDZzVuHO0S9ZBo?si=783ac20bae724144", "_blank")}
          />
          <TreeItem
            icon={<Podcast className="h-4 w-4 text-purple-500" />}
            label="apple podcasts"
            onClick={() => window.open("https://podcasts.apple.com/us/podcast/saturdata/id1878774351", "_blank")}
          />
          <TreeItem
            icon={<Linkedin className="h-4 w-4 text-blue-600" />}
            label="linkedin"
            onClick={() => window.open("https://www.linkedin.com/company/saturdata", "_blank")}
          />
          <TreeItem
            icon={<img src="/assets/images/logos/github.webp" alt="GitHub" className="h-4 w-4 object-contain" />}
            label="github"
            onClick={() => window.open("https://github.com/saturdata/resources", "_blank")}
          />
          <TreeItem
            icon={<Coffee className="h-4 w-4 text-green-500" />}
            label="buy us a coffee"
            onClick={() => window.open("https://buymeacoffee.com/saturdatapod", "_blank")}
          />
        </TreeItem>
      </div>
    </aside>
  )
}

