import { Play, Youtube, Music, Podcast } from "lucide-react"
import { Button } from "@/components/ui/button"

function renderDescription(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (match) {
      return (
        <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">
          {match[1]}
        </a>
      )
    }
    return part
  })
}

interface EpisodeCardProps {
  title: string
  description: string
  youtubeUrl?: string
  spotifyUrl?: string
  appleUrl?: string
  imageUrl?: string
}

export function EpisodeCard({
  title,
  description,
  youtubeUrl,
  spotifyUrl,
  appleUrl,
  imageUrl,
}: EpisodeCardProps) {
  return (
    <div className="border border-border rounded-md bg-card overflow-hidden transition-colors group flex flex-col">
      {imageUrl && (
        <div className="w-full aspect-video bg-muted/30 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Play className="h-4 w-4 text-primary flex-shrink-0" />
          <span className="font-mono text-sm text-foreground">{title}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {renderDescription(description)}
        </p>
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          {youtubeUrl && (
            <Button
              variant="outline"
              size="default"
              className="gap-2 text-sm bg-transparent hover:border-primary hover:bg-transparent"
              asChild
            >
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4 text-destructive" />
                Watch
              </a>
            </Button>
          )}
          {spotifyUrl && (
            <Button
              variant="outline"
              size="default"
              className="gap-2 text-sm bg-transparent hover:border-primary hover:bg-transparent"
              asChild
            >
              <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
                <Music className="h-4 w-4 text-primary" />
                Listen
              </a>
            </Button>
          )}
          {appleUrl && (
            <Button
              variant="outline"
              size="default"
              className="gap-2 text-sm bg-transparent hover:border-primary hover:bg-transparent"
              asChild
            >
              <a href={appleUrl} target="_blank" rel="noopener noreferrer">
                <Podcast className="h-4 w-4 text-purple-500" />
                Apple
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

