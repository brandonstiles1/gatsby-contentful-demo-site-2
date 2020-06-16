require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Brandon's Gatsby Site",
    author: "Brandon Stiles"
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'j6i0opzx2j51',
        accessToken: process.env.CONTENFUL_API_KEY,
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    }

  ],
}
