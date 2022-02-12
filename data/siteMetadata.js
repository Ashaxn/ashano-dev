const siteMetadata = {
  title: 'Ashan Subawickrama',
  author: 'Ashan',
  headerTitle: '',
  description:
    'I`m Full-Stack Developer. Currently learning everything. Love making open source projects on Github.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://www.ashano.tech/',
  siteRepo: 'https://github.com/Ashaxn/ashano-dev',
  siteLogo: '/public/static/images/avatar.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/social-banner.png',
  email: 'ashansube@gmail.com',
  github: 'https://github.com/Ashaxn',
  twitter: 'https://twitter.com/ashansube',
  facebook: 'https://www.facebook.com/profile.php?id=100010543662765',
  youtube: 'https://www.youtube.com/channel/UC9txl705utOP5oA7zWR7NUQ',
  linkedin: 'https://www.linkedin.com/in/ashan-subawickrama/',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: true,
    googleAnalyticsId: 'G-8LX651HGWT',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
