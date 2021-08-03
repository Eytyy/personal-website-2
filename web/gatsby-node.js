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
        filter: { slug: { current: { ne: null } }, page: { _id: { ne: null } } }
      ) {
        nodes {
          _id
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
    const { _id, slug = {} } = route
    const path = [pathPrefix, slug.current, "/"].join("")
    reporter.info(`Creating landing page: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { id: _id },
    })
  })
}

async function createPresentations(
  pathPrefix = "/presentations",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPresentation {
        nodes {
          _id
          slug {
            current
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pres = (result.data.allSanityPresentation || {}).nodes || []
  pres.forEach(presPost => {
    const { _id, slug = {} } = presPost
    const path = [pathPrefix, slug.current, "/"].join("")
    reporter.info(`Creating Presentation: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/templates/presentation.js"),
      context: { id: _id },
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
      allSanityProject {
        nodes {
          _id
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
    const { _id, slug = {} } = project
    const path = [pathPrefix, slug.current, "/"].join("")
    reporter.info(`Creating Project: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { id: _id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages("/", graphql, actions, reporter)
  await createProjects("/work/", graphql, actions, reporter)
  await createPresentations("/presentations/", graphql, actions, reporter)
}
