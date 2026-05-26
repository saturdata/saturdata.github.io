"use client"

import React, { useState, useEffect } from "react"
import { LineNumber, SQLComment, SQLKeyword, SQLString, SQLFunction } from "@/components/query-editor"

interface TypingAnimationProps {
  speed?: number
}

const ROLES = ["ai_engineer", "data_engineer", "data_scientist", "data_analyst", "analytics_engineer"] as const
const PAUSE_FULL_MS = 1500
const PAUSE_EMPTY_MS = 300

type CyclePhase = "pauseFull" | "erasing" | "pauseEmpty" | "typingNew"

const Cursor = () => (
  <span
    className="inline-block w-[2px] h-[18px] ml-[1px]"
    style={{
      backgroundColor: '#22c55e',
      animation: 'cursor-blink 0.8s step-end infinite',
      verticalAlign: 'text-bottom',
      boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
    }}
  />
)

export function TypingAnimation({ speed = 50 }: TypingAnimationProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState<string>("")
  const [cyclePhase, setCyclePhase] = useState<CyclePhase>("typingNew")

  useEffect(() => {
    if (cyclePhase === "pauseFull") {
      const t = setTimeout(() => setCyclePhase("erasing"), PAUSE_FULL_MS)
      return () => clearTimeout(t)
    }

    if (cyclePhase === "erasing") {
      if (displayedRole.length === 0) {
        setCyclePhase("pauseEmpty")
        return
      }
      const t = setTimeout(() => {
        setDisplayedRole((prev) => prev.slice(0, -1))
      }, speed)
      return () => clearTimeout(t)
    }

    if (cyclePhase === "pauseEmpty") {
      const t = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setCyclePhase("typingNew")
      }, PAUSE_EMPTY_MS)
      return () => clearTimeout(t)
    }

    if (cyclePhase === "typingNew") {
      const target = ROLES[roleIndex]
      if (displayedRole === target) {
        setCyclePhase("pauseFull")
        return
      }
      const t = setTimeout(() => {
        setDisplayedRole(target.slice(0, displayedRole.length + 1))
      }, speed)
      return () => clearTimeout(t)
    }
  }, [cyclePhase, displayedRole, roleIndex, speed])

  return (
    <div className="space-y-1">
      <div>
        <LineNumber>{1}</LineNumber>
        <SQLComment>-- Saturdata: The podcast by and for the data community</SQLComment>
      </div>
      <div>
        <LineNumber>{2}</LineNumber>
      </div>
      <div>
        <LineNumber>{3}</LineNumber>
        <SQLKeyword>SELECT</SQLKeyword>
      </div>
      <div>
        <LineNumber>{4}</LineNumber>
        <span>{"    "}</span>
        <SQLString>{"'Humanize the data world'"}</SQLString>
        <span> </span>
        <SQLKeyword>AS</SQLKeyword>
        <span> mission,</span>
      </div>
      <div>
        <LineNumber>{5}</LineNumber>
        <span>{"    "}</span>
        <SQLString>{"'Saturdays'"}</SQLString>
        <span> </span>
        <SQLKeyword>AS</SQLKeyword>
        <span> schedule,</span>
      </div>
      <div>
        <LineNumber>{6}</LineNumber>
        <span>{"    "}</span>
        <SQLFunction>ARRAY</SQLFunction>
        <span>[</span>
        <SQLString>{"'Shifra Williams'"}</SQLString>
        <span>, </span>
        <SQLString>{"'Sam LaFell'"}</SQLString>
        <span>] </span>
        <SQLKeyword>AS</SQLKeyword>
        <span> hosts</span>
      </div>
      <div>
        <LineNumber>{7}</LineNumber>
        <SQLKeyword>FROM</SQLKeyword>
        <span> podcast.metadata</span>
      </div>
      <div>
        <LineNumber>{8}</LineNumber>
        <SQLKeyword>WHERE</SQLKeyword>
        <span> audience = </span>
        <SQLString>{"'next_generation'"}</SQLString>
      </div>
      <div>
        <LineNumber>{9}</LineNumber>
        <span>{"    "}</span>
        <SQLKeyword>AND</SQLKeyword>
        <span>{" role = "}</span>
        <SQLString>{`'${displayedRole}`}</SQLString>
        <Cursor />
        <SQLString>{`';`}</SQLString>
      </div>
      <style jsx>{`
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
