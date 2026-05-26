export const SECTION_TO_SLUG: Record<string, string> = {
  home: "home",
  hosts: "about",
  episodes: "episodes",
  guests: "guest_appearances",
}

export const SLUG_TO_SECTION: Record<string, string> = {
  home: "home",
  about: "hosts",
  episodes: "episodes",
  guest_appearances: "guests",
}

export const SECTION_SLUGS = Object.keys(SLUG_TO_SECTION)
