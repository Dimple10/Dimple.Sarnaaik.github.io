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
    authors: ['D. V. Nguyen', 'D. Sarnaaik', 'K. K. Boddy', 'E. O. Nadler', 'V. Gluscevic'],
    type: 'peer-reviewed',
  },

  // In preparation
  {
    year: '2025',
    title: 'Probing Dark Matter Subhalo Populations with the Nancy Grace Roman Telescope',
    journal: 'In preparation',
    arxiv: null,
    doi: null,
    models: ['WIMPs', 'Fuzzy DM', 'SIDM'],
    techniques: ['Forward Modeling', 'Weak Lensing', 'MCMC'],
    authors: ['D. Sarnaaik', 'et al.'],
    type: 'in-preparation',
  },
  {
    year: '2025',
    title: 'Merger Tree Calibration to Beyond-CDM',
    journal: 'In preparation',
    arxiv: null,
    doi: null,
    models: ['Fuzzy DM', 'SIDM', 'WIMPs'],
    techniques: ['MCMC', 'N-body Simulations', 'Semi-analytic Modeling'],
    authors: ['D. Sarnaaik', 'et al.'],
    type: 'in-preparation',
  },

  // Science writing
  {
    year: '2025',
    title: '"Astronomy across barriers"',
    journal: 'The Lab Report, Volume 2 — USC Department of Physics and Astronomy',
    arxiv: null,
    doi: null,
    models: [],
    techniques: [],
    authors: ['D. Sarnaaik'],
    type: 'science-writing',
  },
]
