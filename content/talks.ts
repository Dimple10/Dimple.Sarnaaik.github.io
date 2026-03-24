export interface Talk {
  title: string
  venue: string
  year: string
  type: 'Seminar' | 'Conference' | 'Poster' | 'Workshop' | 'Colloquium'
  location?: string
  slides?: string
  abstract?: string
}

// TODO: Add more talks and update with slide links when available
export const talks: Talk[] = [
  {
    title: 'Dark Matter Substructure with Roman Space Telescope',
    venue: 'USC Cosmology Seminar',
    year: '2024',
    type: 'Seminar',
    location: 'Los Angeles, CA',
    abstract:
      'An overview of forward modeling techniques for constraining dark matter subhalo populations using weak gravitational lensing from the Nancy Grace Roman Space Telescope.',
    // TODO: Add slides link
  },
  // TODO: Add additional talks, posters, and conference presentations
]
