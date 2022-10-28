import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: '.env',
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Hoja De Vida',
    siteUrl: 'https://www.yourdomain.tld',
    menuLinks: [
      {
        name: 'Inicia',
        link: '/',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
  ],
};

export default config;
