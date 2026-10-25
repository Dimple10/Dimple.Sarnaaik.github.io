export interface Talk {
  title: string
  venue: string
  year: string
  season: string
  type: 'Talk' | 'Poster' | 'Panelist' | 'Colloquium' | 'Invited Talk' | 'Guest Lecture'
  location?: string
  slides?: string
  abstract?: string
  award?: string
}

export const talks: Talk[] = [
  // ── Invited Talks ──────────────────────────────────────────────
  {
    title: 'Dark matter substructure across scales: constraints from Roman astrometry and beyond-CDM merger trees',
    venue: 'UCLA Astro Lunch Talk',
    year: '2027',
    season: 'Spring',
    type: 'Invited Talk',
    location: 'Los Angeles, CA',
    abstract:
      'Invited seminar covering the Roman astrometry forward-model pipeline for dark matter subhalo detection and the COZMIC-calibrated merger trees in Galacticus.',
  },
  {
    title: 'Probing dark matter substructure with Roman Space Telescope stellar astrometry',
    venue: 'KIPAC Tea Talk, Kavli Institute for Particle Astrophysics & Cosmology',
    year: '2026',
    season: 'Fall',
    type: 'Invited Talk',
    location: 'Stanford University, CA',
    abstract:
      'Invited talk on forecasting Roman\'s sensitivity to the subhalo mass spectrum for CDM, WDM, and PBH models via gravitational perturbations of stellar apparent accelerations.',
  },
  {
    title: 'Dark matter and the invisible universe',
    venue: 'Pasadena City College — Guest Lecture',
    year: '2026',
    season: 'Spring',
    type: 'Guest Lecture',
    location: 'Pasadena, CA',
    abstract:
      'Guest lecture introducing dark matter evidence, models, and detection methods to undergraduate students.',
  },
  {
    title: 'A career in astrophysics: searching for dark matter',
    venue: 'KJ Somaiya School',
    year: '2026',
    season: 'Spring',
    type: 'Invited Talk',
    location: 'Mumbai, India',
    abstract:
      'Public outreach talk on dark matter research and careers in astrophysics for high school students.',
  },
  {
    title: 'A career in astrophysics: searching for dark matter',
    venue: 'Mandsaur High School',
    year: '2026',
    season: 'Spring',
    type: 'Invited Talk',
    location: 'Mandsaur, India',
    abstract:
      'Public outreach talk on dark matter research and careers in astrophysics for high school students.',
  },

  // ── Contributed Talks ──────────────────────────────────────────
  {
    title: 'Beyond-CDM merger tree calibration with Galacticus',
    venue: 'Galaxy Formation & Evolution in Southern California (GalFRESCA)',
    year: '2026',
    season: 'Spring',
    type: 'Talk',
    location: 'UC Irvine, CA',
    abstract:
      'Calibrating WDM, IDM, and FDM progenitor mass functions against the COZMIC N-body suites for use in the Galacticus semi-analytic model.',
  },
  {
    title: 'Combining probes to constrain dark matter models: Roman astrometry and beyond-CDM merger trees',
    venue: 'Dark Matter Probe Combination Workshop, KICP',
    year: '2026',
    season: 'Spring',
    type: 'Talk',
    location: 'Chicago, IL',
    abstract:
      'Contributed talk at KICP workshop on combining Roman subhalo astrometry with semi-analytic merger tree constraints to break degeneracies in dark matter model selection.',
  },
  {
    title: 'Dark matter subhalo populations and constraints from the Nancy Grace Roman Space Telescope',
    venue: 'APS April Meeting',
    year: '2025',
    season: 'Spring',
    type: 'Talk',
    location: 'Anaheim, CA',
    abstract:
      'Forward-modeling astrometric weak lensing signatures of dark matter subhalos in mock Roman Space Telescope data and constraining power across DM models.',
  },

  // ── Posters ────────────────────────────────────────────────────
  {
    title: 'Probing dark matter subhalo populations with Roman Space Telescope stellar astrometry',
    venue: 'American Astronomical Society (AAS) Meeting',
    year: '2026',
    season: 'Winter',
    type: 'Poster',
    location: 'Pasadena, CA',
    award: 'Chambliss Astronomy Achievement Student Award',
    abstract:
      'Poster presenting the Roman forward-model pipeline for dark matter subhalo detection and subhalo mass spectrum forecasts across CDM, WDM, and PBH models.',
  },
  {
    title: 'Beyond-CDM merger tree calibration to dark matter models',
    venue: 'UCLA Dark Matter Conference',
    year: '2025',
    season: 'Fall',
    type: 'Poster',
    location: 'Los Angeles, CA',
    abstract:
      'Calibrating Galacticus semi-analytic merger trees to WDM, IDM, and FDM dark matter models using MCMC sampling on the COZMIC N-body simulation suites.',
  },
  {
    title: 'Dark matter subhalo detection with Roman astrometry',
    venue: 'Conference for Undergraduate Women in Physics (CUWiP), APS',
    year: '2024',
    season: 'Winter',
    type: 'Poster',
    location: 'San Diego, CA',
    abstract:
      'Poster on the Roman Space Telescope forward-model pipeline for detecting dark matter subhalos through gravitational perturbations of stellar apparent accelerations.',
  },
  {
    title: 'Dark matter weak lensing constraints predicted for the Roman Space Telescope',
    venue: 'oSTEM Annual Conference',
    year: '2024',
    season: 'Fall',
    type: 'Poster',
    location: 'Anaheim, CA',
    abstract:
      'Poster on dark matter weak lensing constraints predicted for the Nancy Grace Roman Space Telescope across multiple DM models.',
  },
  {
    title: 'Dark matter weak lensing constraints for the Roman Space Telescope — preliminary results',
    venue: 'USC Physics Department Research Conference',
    year: '2023',
    season: 'Fall',
    type: 'Poster',
    location: 'Catalina Island, CA',
    abstract:
      'Preliminary results on dark matter weak lensing constraints for the Roman Space Telescope using forward-modeling pipelines.',
  },
  {
    title: 'Merger tree calibration to beyond-CDM dark matter models',
    venue: 'Galaxy Formation & Evolution in Southern California (GalFRESCA)',
    year: '2023',
    season: 'Fall',
    type: 'Poster',
    location: 'Riverside, CA',
    abstract:
      'Poster presenting results on calibrating Galacticus\' semi-analytic model to beyond-CDM dark matter models using MCMC sampling on N-body simulation merger trees.',
  },
]
