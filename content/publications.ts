export interface Publication {
  year: string
  title: string
  journal: string
  arxiv: string | null
  doi: string | null
  models: string[]
  techniques: string[]
  authors: string[]
  type: 'peer-reviewed' | 'in-preparation' | 'science-writing'
}

export const publications: Publication[] = [
  // Peer-reviewed
  {
    year: '2021',
    title: 'Observational constraints on dark matter scattering with electrons',
    journal: 'Physical Review D, 104(10), 103521',
    arxiv: 'https://arxiv.org/abs/2107.12380',
    doi: 'https://doi.org/10.1103/PhysRevD.104.103521',
    models: ['WIMPs'],
    techniques: ['MCMC', 'Bayesian Analysis', 'HPC'],
    authors: ['D. V. Nguyen†', 'D. Sarnaaik†', 'K. K. Boddy', 'E. O. Nadler', 'V. Gluscevic'],
    type: 'peer-reviewed',
  },

  // In preparation
  {
    year: '2026',
    title: 'Probing Dark Matter Subhalo Populations with the Nancy Grace Roman Space Telescope',
    journal: 'In preparation',
    arxiv: null,
    doi: null,
    models: ['WIMPs', 'Fuzzy DM', 'PBH', 'WDM'],
    techniques: ['Forward Modeling', 'Stellar Astrometry', 'MCMC'],
    authors: ['D. Sarnaaik', 'K. Pardo'],
    type: 'in-preparation',
  },
  {
    year: '2026',
    title: 'Beyond-CDM Merger Tree Calibration with Galacticus',
    journal: 'In preparation',
    arxiv: null,
    doi: null,
    models: ['Fuzzy DM', 'WDM', 'IDM'],
    techniques: ['N-body Simulations', 'Semi-analytic Modeling', 'MCMC'],
    authors: ['D. Sarnaaik', 'A. Benson'],
    type: 'in-preparation',
  },

  // Science writing
  {
    year: '2026',
    title: 'POV: The life of an academic',
    journal: 'The Lab Report, Vol. 3 — USC Department of Physics & Astronomy',
    arxiv: null,
    doi: null,
    models: [],
    techniques: [],
    authors: ['D. Sarnaaik'],
    type: 'science-writing',
  },
  {
    year: '2025',
    title: 'Astronomy across barriers',
    journal: 'The Lab Report, Vol. 2 — USC Department of Physics & Astronomy',
    arxiv: null,
    doi: null,
    models: [],
    techniques: [],
    authors: ['D. Sarnaaik'],
    type: 'science-writing',
  },
]
