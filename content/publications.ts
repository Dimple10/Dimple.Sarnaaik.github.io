export interface Publication {
  year: string
  title: string
  journal: string
  arxiv: string | null
  models: string[]
  techniques: string[]
  authors?: string[]
}

// TODO: Update with real publication details, arxiv links, and co-authors when papers are submitted
export const publications: Publication[] = [
  {
    year: '2024',
    title:
      'Constraining Dark Matter Subhalo Mass Functions with Roman Space Telescope Weak Lensing',
    journal: 'In preparation',
    arxiv: null,
    models: ['WIMPs', 'Fuzzy DM'],
    techniques: ['Gravitational Probes', 'Forward Modeling'],
    authors: ['D. Sarnaaik', 'K. Pardo', 'A. Benson'],
  },
  {
    year: '2024',
    title:
      'Dark Matter Merger Trees Across Models with Galacticus and Symphony',
    journal: 'In preparation',
    arxiv: null,
    models: ['Fuzzy DM', 'SIDM', 'WIMPs'],
    techniques: ['Simulations', 'N-body'],
    authors: ['D. Sarnaaik', 'A. Benson', 'K. Pardo'],
  },
]
