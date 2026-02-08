import { Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HostCardProps {
  name: string
  pronouns: string
  role: string
  bio: string
  image?: string
  linkedinLink?: string
  websiteLink?: string
}

export function HostCard({ name, pronouns, role, bio, image, linkedinLink, websiteLink }: HostCardProps) {
  const hasLinks = linkedinLink || websiteLink

  return (
    <div className="border border-border rounded-md bg-card overflow-hidden flex flex-col h-full">
      <div className="flex items-start gap-6 px-4 py-4 border-b border-border bg-muted/30">
        {image ? (
          <div className="h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-muted-foreground">{name.charAt(0)}</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{name}</span>
            <span className="text-xs text-muted-foreground">{pronouns}</span>
          </div>
          <span className="text-xs text-primary font-mono block mb-2 mt-2">{role}</span>
          {hasLinks && (
            <div className="flex gap-2 -ml-2">
              {linkedinLink && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 bg-transparent hover:bg-transparent group"
                  asChild
                >
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 group-hover:text-primary" />
                  </a>
                </Button>
              )}
              {websiteLink && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 bg-transparent hover:bg-transparent group"
                  asChild
                >
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                  >
                    <Globe className="h-4 w-4 group-hover:text-primary" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="p-4 flex-1">
        <div 
          className="text-sm text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: bio }}
        />
      </div>
    </div>
  )
}

