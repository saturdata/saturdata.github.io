import { Database, CheckCircle, Wifi } from "lucide-react"

export function StatusBar() {
  return (
    <footer className="flex items-center justify-between px-4 py-1.5 border-t border-border bg-muted/30 text-xs text-muted-foreground">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Database className="h-3 w-3" />
          <span className="font-mono">saturdata_db</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="h-3 w-3 text-primary" />
          <span className="hidden md:inline">Connected</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Wifi className="h-3 w-3 text-primary" />
          <span>Live</span>
        </div>
        <span className="font-mono">v1.0.0</span>
      </div>
    </footer>
  )
}

