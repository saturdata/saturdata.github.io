"use client"

import React, { useState, useEffect } from "react"
import { LineNumber, SQLComment, SQLKeyword, SQLString, SQLFunction } from "@/components/query-editor"

interface TypingAnimationProps {
  speed?: number
  onComplete?: () => void
}

export function TypingAnimation({ speed = 50, onComplete }: TypingAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const fullQuery = `-- Saturdata: The podcast by and for the data community

SELECT
    'Humanizing the data world' AS mission,
    'Saturdays' AS schedule,
    ARRAY['Shifra Williams', 'Sam LaFell'] AS hosts
FROM podcast.metadata
WHERE audience = 'next_generation'
    AND role IN ('data_analyst', 'data_scientist', 'data_engineer');`

  useEffect(() => {
    if (currentIndex < fullQuery.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, speed, fullQuery.length, isComplete, onComplete])

  const renderLine = (lineText: string, lineNum: number, lineStartIndex: number) => {
    // Calculate how much of this line should be visible
    const lineEndIndex = lineStartIndex + lineText.length
    const visibleLength = Math.max(0, Math.min(currentIndex - lineStartIndex, lineText.length))
    const visibleText = lineText.slice(0, visibleLength)
    const invisibleText = lineText.slice(visibleLength)
    const isLastVisibleLine = currentIndex >= lineStartIndex && currentIndex < lineEndIndex

    // Comment line
    if (lineText.trim().startsWith("--")) {
      return (
        <div key={lineNum}>
          <LineNumber>{lineNum}</LineNumber>
          <SQLComment>
            <span>{visibleText}</span>
          </SQLComment>
          {isLastVisibleLine && !isComplete && renderCursor()}
          <span className="invisible">{invisibleText}</span>
        </div>
      )
    }

    // Empty line
    if (lineText.trim() === "") {
      return (
        <div key={lineNum}>
          <LineNumber>{lineNum}</LineNumber>
          {isLastVisibleLine && !isComplete && renderCursor()}
          <span className="invisible">{lineText}</span>
        </div>
      )
    }

    // Parse SQL keywords and syntax for the visible part
    const keywords = ["SELECT", "FROM", "WHERE", "AND", "IN", "AS"]
    const functions = ["ARRAY"]

    let elements: (string | React.ReactElement)[] = [visibleText]

    // Replace keywords
    keywords.forEach((keyword) => {
      const newElements: (string | React.ReactElement)[] = []
      elements.forEach((el) => {
        if (typeof el === "string") {
          const parts = el.split(new RegExp(`\\b(${keyword})\\b`, "g"))
          parts.forEach((part, idx) => {
            if (part === keyword) {
              newElements.push(<SQLKeyword key={`kw-${lineNum}-${keyword}-${idx}`}>{part}</SQLKeyword>)
            } else if (part) {
              newElements.push(part)
            }
          })
        } else {
          newElements.push(el)
        }
      })
      elements = newElements
    })

    // Replace functions
    functions.forEach((func) => {
      const newElements: (string | React.ReactElement)[] = []
      elements.forEach((el) => {
        if (typeof el === "string") {
          const parts = el.split(new RegExp(`\\b(${func})\\b`, "g"))
          parts.forEach((part, idx) => {
            if (part === func) {
              newElements.push(<SQLFunction key={`fn-${lineNum}-${func}-${idx}`}>{part}</SQLFunction>)
            } else if (part) {
              newElements.push(part)
            }
          })
        } else {
          newElements.push(el)
        }
      })
      elements = newElements
    })

    // Replace strings (single quotes)
    const finalElements: (string | React.ReactElement)[] = []
    elements.forEach((el, idx) => {
      if (typeof el === "string") {
        const stringMatches = el.split(/('(?:[^'\\]|\\.)*')/g)
        stringMatches.forEach((match, matchIdx) => {
          if (match.startsWith("'") && match.endsWith("'")) {
            finalElements.push(
              <SQLString key={`str-${lineNum}-${idx}-${matchIdx}`}>{match}</SQLString>
            )
          } else if (match) {
            finalElements.push(match)
          }
        })
      } else {
        finalElements.push(el)
      }
    })

    return (
      <div key={lineNum}>
        <LineNumber>{lineNum}</LineNumber>
        {finalElements}
        {isLastVisibleLine && !isComplete && renderCursor()}
        <span className="invisible">{invisibleText}</span>
      </div>
    )
  }

  const renderCursor = () => (
    <span 
      className="inline-block w-[2px] h-[18px] ml-[1px]"
      style={{ 
        backgroundColor: '#22c55e',
        animation: 'cursor-blink 0.8s step-end infinite',
        verticalAlign: 'text-bottom',
        boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)'
      }} 
    />
  )

  const lines = fullQuery.split("\n")
  let charIndex = 0
  const renderedLines = lines.map((line, idx) => {
    const lineStartIndex = charIndex
    const renderedLine = renderLine(line, idx + 1, lineStartIndex)
    charIndex += line.length + 1 // +1 for newline character
    return renderedLine
  })

  return (
    <div className="space-y-1 relative">
      {renderedLines}
      <style jsx>{`
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

