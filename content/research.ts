export interface ResearchProject {
  id: string
  title: string
  description: string
  longDescription: string
  techniques: string[]
  models: string[]
  status: 'active' | 'completed'
  year: string
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'roman-subhalos',
    title: 'Hunting Dark Matter Subhalos with Roman Space Telescope',
    description:
      'Using weak gravitational lensing signals from the Nancy Grace Roman Space Telescope to probe the low-mass regime of dark matter subhalos through forward modeling.',
    longDescription:
      'The number of predicted DM subhalos varies dramatically from model to model. My research uses the weak gravitational lensing signal to be observed by the Nancy Grace Roman Space Telescope toward our galaxy center to detect the effect of these subhalos. I forward model the lensing signal expected for different DM models, allowing us to probe the low-mass regime of dark matter and distinguish between competing candidates.',
    techniques: ['Gravitational Probes', 'Forward Modeling', 'Weak Lensing'],
    models: ['WIMPs', 'Fuzzy DM', 'SIDM'],
    status: 'active',
    year: '2023–Present',
  },
  {
    id: 'merger-trees',
    title: 'Dark Matter Merger Trees for Different DM Models',
    description:
      'Analyzing the Symphony simulation suite using Galacticus to compare merger tree statistics across CDM, WDM, fuzzy dark matter, and SIDM scenarios.',
    longDescription:
      'Using Galacticus, a semi-analytic model of galaxy formation, I analyze the Symphony simulation suite of different DM models by studying their merger history. Comparing merger tree statistics across dark matter candidates reveals distinct imprints on subhalo populations and halo assembly, providing complementary constraints to direct detection experiments.',
    techniques: ['Simulations', 'N-body', 'Semi-analytic Modeling'],
    models: ['Fuzzy DM', 'WIMPs', 'SIDM'],
    status: 'active',
    year: '2022–Present',
  },
]
