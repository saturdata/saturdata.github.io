"use client"

import { cn } from "@/lib/utils"

interface Column {
  key: string
  label: string
  type?: "string" | "number" | "boolean" | "link"
  width?: string
}

interface ResultsTableProps {
  columns: Column[]
  data: Record<string, unknown>[]
  title?: string
  rowCount?: number
}

export function ResultsTable({ columns, data, title, rowCount }: ResultsTableProps) {
  return (
    <div className="border border-border rounded-md bg-card overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/50">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
          {rowCount !== undefined && (
            <span className="text-xs text-muted-foreground">
              {rowCount} row{rowCount !== 1 ? "s" : ""} returned
            </span>
          )}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-2 text-left font-mono font-medium text-muted-foreground text-xs uppercase tracking-wider"
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b border-border/50 hover:bg-muted/30 transition-colors",
                  i % 2 === 0 && "bg-muted/10"
                )}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 font-mono">
                    {col.type === "link" ? (
                      <a
                        href={row[col.key] as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {row[col.key] as string}
                      </a>
                    ) : col.type === "boolean" ? (
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded text-xs",
                          row[col.key]
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {row[col.key] ? "TRUE" : "FALSE"}
                      </span>
                    ) : col.type === "number" ? (
                      <span className="text-syntax-number">{String(row[col.key])}</span>
                    ) : (
                      <span className="text-foreground">{String(row[col.key])}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

