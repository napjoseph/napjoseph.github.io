const ENVIRONMENT = process.env.ELEVENTY_ENV;

let siteUrl = 'http://localhost:3000';
switch (ENVIRONMENT) {
  case 'staging':
    siteUrl = 'https://napjoseph.glitch.me';
  case 'production':
    siteUrl = 'https://napjose.ph/';
}

module.exports = {
  production: ENVIRONMENT === 'production',
  site: {
    title: 'napjose.ph',
    description: 'Personal site of Nap Joseph Calub',
    url: siteUrl,
  },
  author: {
    name: 'Nap Joseph Calub',
    email: 'hello@napjose.ph',
  },
  feed: {
    filename: 'feed.xml',
    path: '/feed/feed.xml',
    id: siteUrl,
  },
};
