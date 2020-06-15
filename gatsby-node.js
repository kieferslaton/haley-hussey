exports.createPages = async({actions, graphql}) => {
  actions.createRedirect({ fromPath:'/', toPath:'/home', redirectInBrowser: true, isPermanent: true})
  const result = await graphql(`
  {
    wpgraphql {
      pages {
        nodes {
          id
          uri
        }
      }
    }
  }
  `);

  const pages = result.data.wpgraphql.pages.nodes

  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve('./src/templates/page.js'),
      context: {
        id: page.id
      }
    })
  })
}