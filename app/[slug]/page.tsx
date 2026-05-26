import { notFound } from "next/navigation"
import { SaturdataPage } from "@/components/saturdata-page"
import { SECTION_SLUGS, SLUG_TO_SECTION } from "@/lib/sections"

export const dynamicParams = false

export function generateStaticParams() {
  return SECTION_SLUGS.map((slug) => ({ slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const section = SLUG_TO_SECTION[slug]
  if (!section) notFound()
  return <SaturdataPage initialSection={section} />
}
