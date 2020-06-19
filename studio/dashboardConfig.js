export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "My Netlify Deploys",
        sites: [
          {
            title: "Sanity Studio",
            apiID: "ce43f59a-de26-42eb-a989-d3d232047533",
            buildHookId:
              "https://api.netlify.com/build_hooks/5eea9237e7f53a019d810bbf",
            name: "sans-sanity-gatsby-starter",
          },

          {
            title: "Website",
            apiID: "7ccf7f28-2ee8-4929-bcf7-55257f4cb523",
            buildHookId:
              "https://api.netlify.com/build_hooks/5eeac2a7a9c61b6880096bab",
            name: "sans-sanity-gatsby-starter-web",
          },
        ],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Last edited documents",
        order: "_updatedAt desc",
        types: ["post", "project"],
      },
      layout: {
        width: "auto",
        height: "large",
      },
    },
    {
      name: "document-list",
      options: {
        title: "Last edited posts",
        order: "_updatedAt desc",
        types: ["post"],
      },
    },
    {
      name: "project-info",
      layout: {
        width: "large",
        height: "small",
      },
    },
    {
      name: "project-users",
      layout: {
        width: "medium",
        height: "small",
      },
    },
  ],
};
