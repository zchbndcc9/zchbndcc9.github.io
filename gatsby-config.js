module.exports = {

  siteMetadata: {
    title: 'Zachary Banducci Blogspot',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigurable: './src/utils/typography.js'
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    'gatsby-transformer-remark'
  ],
}
