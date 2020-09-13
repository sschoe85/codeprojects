module.exports = {
  siteMetadata:{
    title: 'CodeProjects',
    author: 'Sabine Schoetensack'
  },
 
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/pagecontent`
      }
    }, 
    'gatsby-transformer-remark'
  ],
}
