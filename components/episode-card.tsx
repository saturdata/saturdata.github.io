import { Play, Youtube, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EpisodeCardProps {
  title: string
  description: string
  youtubeUrl?: string
  spotifyUrl?: string
  isComingSoon?: boolean
  imageUrl?: string
}

export function EpisodeCard({
  title,
  description,
  youtubeUrl,
  spotifyUrl,
  isComingSoon,
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
        {isComingSoon && (
          <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded font-mono flex-shrink-0">
            SOON
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex items-center gap-2 mt-4">
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
        </div>
      </div>
    </div>
  )
}

