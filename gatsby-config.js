const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'dikuw',
    author: 'Michael Vasilevsky',
    siteUrl: `https://www.dikuw.com`
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ]
}


