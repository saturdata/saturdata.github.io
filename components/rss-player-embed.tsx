"use client"

import { useState } from "react"
import {
  QueryEditor,
  LineNumber,
  SQLKeyword,
  SQLString,
} from "@/components/query-editor"

export function RssPlayerEmbed() {
  const [loaded, setLoaded] = useState(false)

  return (
    <QueryEditor title="listen_live.sql">
      <div className="space-y-1 mb-4">
        <div>
          <LineNumber>{1}</LineNumber>
          <SQLKeyword>SELECT</SQLKeyword> * <SQLKeyword>FROM</SQLKeyword>{" "}
          <SQLString>&apos;rss.saturdata&apos;</SQLString>;
        </div>
      </div>

      <div className="border border-border rounded-md bg-muted/30 overflow-hidden">
        <div className="relative w-full" style={{ minHeight: "200px" }}>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs font-mono">
              Loading player...
            </div>
          )}
          <iframe
            src="https://player.rss.com/saturdata?theme=dark"
            title="Saturdata Podcast Player"
            width="100%"
            height="393"
            loading="lazy"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              border: "none",
              display: loaded ? "block" : "block",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>

      <div className="mt-2 text-xs text-muted-foreground font-mono px-1">
        -- Can&apos;t see the player?{" "}
        <a
          href="https://rss.com/podcasts/saturdata"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Listen on RSS.com
        </a>
      </div>
    </QueryEditor>
  )
}
