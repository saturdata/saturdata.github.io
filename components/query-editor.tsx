"use client"

import React from "react"

import { Play, Save, Clock, MoreHorizontal } from "lucide-react"

interface QueryEditorProps {
  title: string
  children: React.ReactNode
}

export function QueryEditor({ title, children }: QueryEditorProps) {
  return (
    <div className="border border-border rounded-md bg-card overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-7 px-2 flex items-center justify-center">
            <Play className="h-3.5 w-3.5 text-primary" />
          </div>
          <div className="h-7 px-2 flex items-center justify-center">
            <Save className="h-3.5 w-3.5" />
          </div>
          <div className="h-7 px-2 flex items-center justify-center">
            <Clock className="h-3.5 w-3.5" />
          </div>
          <div className="h-7 px-2 flex items-center justify-center">
            <MoreHorizontal className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export function SQLKeyword({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-keyword font-semibold">{children}</span>
}

export function SQLString({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-string">{children}</span>
}

export function SQLFunction({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-function">{children}</span>
}

export function SQLComment({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-comment italic">{children}</span>
}

export function SQLNumber({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-number">{children}</span>
}

export function LineNumber({ children }: { children: number }) {
  return (
    <span className="inline-block w-8 text-right pr-4 text-muted-foreground select-none">
      {children}
    </span>
  )
}

