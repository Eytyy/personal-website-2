async function createLandingPages(
  pathPrefix = "/",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityRoute(
        filter: { slug: { current: { ne: null } }, page: { id: { ne: null } } }
      ) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const routes = (result.data.allSanityRoute || {}).nodes || []
  routes.forEach(route => {
    const { id, slug = {} } = route
    const path = [pathPrefix, slug.current, "/"].join("")
    reporter.info(`Creating landing page: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { id },
    })
  })
}

async function createProjects(
  pathPrefix = "/work",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projects = (result.data.allSanityProject || {}).nodes || []
  projects.forEach(project => {
    const { id, slug = {} } = project
    const path = `${pathPrefix}/${slug.current}/`
    reporter.info(`Creating Project: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { id },
    })
  })
}

async function createBlogPosts(
  pathPrefix = "/blog",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const blogPosts = (result.data.allSanityPost || {}).nodes || []
  blogPosts.forEach(blogPost => {
    const { id, slug = {} } = blogPost
    const path = `${pathPrefix}/${slug.current}/`
    reporter.info(`Creating Blog Post: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/templates/blogPost.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages("/", graphql, actions, reporter)
  await createProjects("/work", graphql, actions, reporter)
  await createBlogPosts("/blog", graphql, actions, reporter)
}
