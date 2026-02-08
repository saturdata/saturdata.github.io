"use client"

import React from "react"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  icon?: React.ReactNode
}

interface IDETabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
  onTabClose?: (id: string) => void
}

export function IDETabs({ tabs, activeTab, onTabChange, onTabClose }: IDETabsProps) {
  return (
    <div className="flex items-center border-b border-border bg-muted/30 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 text-sm border-r border-border transition-colors min-w-fit",
            activeTab === tab.id
              ? "bg-card text-foreground border-b-2 border-b-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          {tab.icon}
          <span className="font-mono text-xs">{tab.label}</span>
          {onTabClose && (
            <X
              className="h-3 w-3 ml-1 opacity-50 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(tab.id)
              }}
            />
          )}
        </button>
      ))}
    </div>
  )
}

