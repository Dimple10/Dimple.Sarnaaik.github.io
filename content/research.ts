export interface ResearchProject {
  id: string
  title: string
  description: string
  longDescription: string
  techniques: string[]
  massScales: string[]
  status: 'active' | 'completed'
  year: string
  group: string
  institution: string
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'galacticus-calibration',
    title: 'Beyond-CDM Merger Tree Calibration with Galacticus',
    description:
      'Calibrating Galacticus — a semi-analytic model of galaxy formation — to beyond-CDM dark matter models by sampling against the COZMIC N-body suites, constraining halo mass functions from cluster to dwarf scales.',
    longDescription:
      'I implemented an improved backsplash halo identification algorithm that directly sharpens subhalo finding in N-body simulations. Using MCMC sampling on the COZMIC simulation suites (WDM, IDM, FDM), I calibrate Galacticus\'s progenitor mass functions and test the effect of tophat vs. sharp-k filter transfer functions on merger tree parameters — spanning cluster, galaxy, and dwarf-galaxy mass scales.',
    techniques: ['MCMC', 'N-body Simulations', 'Semi-analytic Modeling', 'Merger Trees'],
    massScales: ['Cluster scales', 'Galaxy scales', 'Dwarf galaxies'],
    status: 'active',
    year: 'Fall 2022–Present',
    group: "Dr. Andrew Benson's Research Group",
    institution: 'Carnegie Observatories',
  },
  {
    id: 'roman-subhalos',
    title: 'Dark Matter Subhalo Detection with Roman Astrometry',
    description:
      'Building a forward-model pipeline for the Nancy Grace Roman Space Telescope to detect dark matter subhalos through gravitational perturbations of stellar apparent accelerations, forecasting sensitivity to the subhalo mass spectrum across CDM, WDM, and PBH models.',
    longDescription:
      'The number of predicted dark matter subhalos varies dramatically below the dwarf-galaxy scale. I built a forward-model pipeline that propagates subhalo-induced gravitational perturbations into mock Roman astrometric measurements, then recovers the subhalo mass spectrum via MCMC. Longer observation baselines dramatically improve astrometric precision, opening a new window on sub-galactic dark matter structure.',
    techniques: ['Forward Modeling', 'Stellar Astrometry', 'MCMC', 'Gravitational Probes'],
    massScales: ['Dwarf galaxies', 'Sub-galactic (>1 M\u2609)'],
    status: 'active',
    year: 'Fall 2022–Present',
    group: "Roman Space Telescope · USC",
    institution: 'USC',
  },
  {
    id: 'edge-roman-mocks',
    title: 'EDGE Dwarf Galaxy Mocks for Roman SBF Tests',
    description:
      'Building mock Roman Space Telescope images of dwarf galaxies from the EDGE hydrodynamical simulations to test surface-brightness fluctuation methods in the sub-dwarf regime.',
    longDescription:
      'In collaboration with the EDGE simulation team, I construct synthetic Roman imaging of dwarf galaxies from the EDGE hydrodynamical suite. These mocks will benchmark surface-brightness fluctuation (SBF) distance methods at the faint end and probe how baryonic physics and dark matter model choice leave distinct observational signatures in the resolved stellar populations of ultra-faint dwarfs.',
    techniques: ['Hydrodynamical Simulations', 'Mock Imaging', 'Surface Brightness Fluctuations'],
    massScales: ['Dwarf galaxies', 'Sub-galactic (>1 M\u2609)'],
    status: 'active',
    year: '2026–Present',
    group: "Dr. Stacy Kim · EDGE Collaboration",
    institution: 'Carnegie Observatories',
  },
  {
    id: 'dm-electron-interactions',
    title: 'Observational Constraints on Dark Matter–Electron Interactions',
    description:
      'Derived competitive upper limits on dark matter–electron scattering cross-sections using CMB and large-scale structure data, resulting in a co-first-author publication in Physical Review D.',
    longDescription:
      'Working with Dr. Vera Gluscevic, I constrained dark matter–electron interaction cross-sections by running MCMC sampling with the CLASS Boltzmann code on a high-performance computing cluster. I developed a visualization module for DM–baryon interactions at cosmological scales and contributed to the analysis pipeline. This work resulted in a co-first-author publication in Physical Review D (2021).',
    techniques: ['MCMC', 'Bayesian Analysis', 'HPC', 'CLASS Code'],
    massScales: ['Cosmological scales'],
    status: 'completed',
    year: 'Summer 2020–2021',
    group: "Dr. Vera Gluscevic's Research Group",
    institution: 'USC',
  },
]
