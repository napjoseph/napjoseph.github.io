const PRODUCTION = process.env.ELEVENTY_ENV == 'production';
const siteUrl = PRODUCTION
  ? 'https://napjose.ph/'
  : 'https://napjoseph.glitch.me/';

module.exports = {
  production: PRODUCTION,
  site: {
    title: 'napjose.ph',
    description: 'Personal site of Nap Joseph Calub',
    url: siteUrl,
  },
  author: {
    name: 'Nap Joseph Calub',
    email: 'hello@napjose.ph',
  },
};
