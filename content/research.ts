export interface ResearchProject {
  id: string
  title: string
  description: string
  longDescription: string
  techniques: string[]
  models: string[]
  status: 'active' | 'completed'
  year: string
  group: string
  institution: string
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'galacticus-calibration',
    title: 'Merger Tree Calibration to Beyond-CDM',
    description:
      'Calibrating Galacticus — an open-source semi-analytic model of galaxy formation — to beyond-CDM dark matter models using MCMC sampling on large N-body simulation datasets.',
    longDescription:
      'I implemented an algorithm to correctly categorize dark matter subhalos, directly improving the accuracy of Galacticus\' detection module. Using Monte Carlo Markov Chain (MCMC) sampling on various large N-body simulation datasets, I improve the agreement of Galacticus\' semi-analytic model through calibration to beyond-CDM models. I built and validated Galacticus\' target dataset by analyzing merger trees with the updated algorithm and simulation data, and constructed a pipeline to systematically test formation histories across dark matter models — yielding new insights into subhalo merging history.',
    techniques: ['MCMC', 'N-body Simulations', 'Semi-analytic Modeling', 'Merger Trees'],
    models: ['Fuzzy DM', 'WIMPs', 'SIDM'],
    status: 'active',
    year: 'Fall 2022–Present',
    group: 'Dr. Andrew Benson\'s Research Group',
    institution: 'Carnegie Observatories',
  },
  {
    id: 'roman-subhalos',
    title: 'Probing Dark Matter Subhalo Populations with the Nancy Grace Roman Telescope',
    description:
      'Building analysis modules to probe weak lensing signatures across multiple dark matter models, with MCMC forward-modeling of astrometric weak lensing effects in mock Roman Space Telescope data.',
    longDescription:
      'The number of predicted dark matter subhalos varies dramatically from model to model. I built analysis modules to probe weak lensing signatures in survey data across multiple dark matter models and their subhalo populations. Using MCMC forward-modeling, I forecast astrometric weak lensing effects in mock Nancy Grace Roman Space Telescope data — allowing us to constrain the subhalo mass function and distinguish between competing dark matter candidates in the low-mass regime.',
    techniques: ['Forward Modeling', 'Weak Lensing', 'MCMC', 'Gravitational Probes'],
    models: ['WIMPs', 'Fuzzy DM', 'SIDM'],
    status: 'active',
    year: 'Fall 2022–Present',
    group: 'Dr. Kris Pardo\'s Research Group',
    institution: 'USC',
  },
  {
    id: 'dm-electron-interactions',
    title: 'Observational Constraints on Dark Matter–Electron Interactions',
    description:
      'Constrained dark matter–electron interaction cross-sections via MCMC sampling and the CLASS code on a high-performance computing cluster, resulting in a publication in Physical Review D.',
    longDescription:
      'Working with Dr. Vera Gluscevic, I constrained dark matter–electron interaction cross-sections by deploying MCMC sampling and the CLASS Boltzmann code on a high-performance computing cluster. I developed a visualization module for dark matter–baryon interactions at cosmological scales, presented findings at conferences, and contributed to course lectures. This work resulted in a peer-reviewed publication in Physical Review D (2021).',
    techniques: ['MCMC', 'Bayesian Analysis', 'HPC', 'CLASS Code'],
    models: ['WIMPs'],
    status: 'completed',
    year: 'Summer 2020–2021',
    group: 'Dr. Vera Gluscevic\'s Research Group',
    institution: 'USC',
  },
]
