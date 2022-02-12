module.exports = () => {
  const BASE_URL = process.env.BASE_URL || 'https://api.jungledevs.com/api/v1'
  const HERO_AB_EXPERIMENT =
    process.env.HERO_AB_EXPERIMENT || 'HERO_AB_EXPERIMENT'

  return {
    env: {
      BASE_URL,
      HERO_AB_EXPERIMENT,
    },
  }
}
