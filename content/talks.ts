export interface Talk {
  title: string
  venue: string
  year: string
  season: string
  type: 'Talk' | 'Poster' | 'Panelist' | 'Colloquium'
  location?: string
  slides?: string
  abstract?: string
}

export const talks: Talk[] = [
  {
    title: 'Merger tree calibration to beyond-CDM dark matter models',
    venue: 'Galaxy Formation & Evolution in Southern California (GALfresca)',
    year: '2025',
    season: 'Fall',
    type: 'Poster',
    location: 'Southern California',
    abstract:
      'Poster presenting results on calibrating Galacticus\' semi-analytic model to beyond-CDM dark matter models using MCMC sampling on N-body simulation merger trees.',
  },
  {
    title: 'Dark matter subhalo populations and constraints from the Nancy Grace Roman Space Telescope',
    venue: 'APS April Meeting',
    year: '2025',
    season: 'Spring',
    type: 'Talk',
    location: 'Anaheim, CA',
    abstract:
      'Talk on forward-modeling astrometric weak lensing signatures of dark matter subhalos in mock Roman Space Telescope data and their constraining power across DM models.',
  },
  {
    title: 'Panelist — academic research, leadership, and applying to graduate school',
    venue: 'Conference for Undergraduate Women in Physics (CUWiP), APS',
    year: '2024',
    season: 'Spring',
    type: 'Panelist',
    location: 'USC',
    abstract:
      'Panelist representing USC — shared insights on academic research, leadership in physics organizations, and applying to graduate school.',
  },
  {
    title: 'Dark matter weak lensing constraints predicted for the Roman Space Telescope',
    venue: 'Out in STEM (oSTEM)',
    year: '2024',
    season: 'Spring',
    type: 'Poster',
    abstract:
      'Poster on dark matter weak lensing constraints predicted for the Nancy Grace Roman Space Telescope across multiple DM models.',
  },
  {
    title: 'Dark matter weak lensing constraints for the Roman Space Telescope — preliminary results',
    venue: 'Physics Departmental Conference, USC',
    year: '2023',
    season: 'Fall',
    type: 'Poster',
    location: 'Los Angeles, CA',
    abstract:
      'Preliminary results on dark matter weak lensing constraints for the Roman Space Telescope using forward-modeling pipelines.',
  },
  {
    title: 'New constraints on dark matter–electron interactions',
    venue: 'Conference for Undergraduate Women in Physics (CUWiP), APS',
    year: '2019–2021',
    season: 'Spring',
    type: 'Poster',
    abstract:
      'Presented new constraints on dark matter–electron interaction cross-sections derived from MCMC sampling with the CLASS Boltzmann code.',
  },
  {
    title: 'Solar rotation data — Dr. Rhodes Research Group',
    venue: 'Undergraduate Research Symposium, USC',
    year: '2019',
    season: 'Spring',
    type: 'Poster',
    location: 'Los Angeles, CA',
    abstract:
      'Contributed to poster presenting data visualizations of solar observations for the Solar Internal Structure and Dynamics Project.',
  },
]
