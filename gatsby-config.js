module.exports = {
  siteMetadata: {
    title: "CodeProjects",
    author: "Sabine Schoetensack",
    keywords: "HTML, CSS, JavaScript",
    url: "www.code-projects.de",
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/pagecontent`,
      },
    },
    "gatsby-transformer-remark",
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
  ],
}
