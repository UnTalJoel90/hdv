import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: '.env',
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'CV',
    description: '',
    author: 'Joel Elicer Robinson Alvarez',
    // siteUrl: 'https://joelrobinson.co',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      // {
      //   name: 'Blog',
      //   link: '/blog',
      // },
      {
        name: 'Project(s)',
        link: '/projects',
        extraMenu: true,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Source Sans Pro', 'source sans pro:200,300,400,600,700,900'],
        display: 'swap',
      },
    },
  ],
};

export default config;
