module.exports = {
  pathPrefix: "/gs-UI",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Greenspark UI Task",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
