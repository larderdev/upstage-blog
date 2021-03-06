const BLOG_NAME = `Upstage Blog`;

module.exports = {
  siteMetadata: {
    title: BLOG_NAME,
    author: {
      name: `David Tuite`,
      summary: `builder of things for developers`,
    },
    description: `Hosted, managed Backstage`,
    bio: 'Upstage offers hosted, managed Backstage with enterprise features',
    siteUrl: `https://upstage.dev`,
    social: {
      twitter: `LarderHQ`,
    },
  },
  pathPrefix: `/blog`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // This tracking ID should match the one used by landen.co or whatever other landing
        // page generator I am using. It's all on the same domain name so it should all use the
        // same tracking ID.
        trackingId: `UA-166771003-1`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-jss`,
  ],
};
