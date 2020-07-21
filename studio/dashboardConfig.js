export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify Deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiID: 'd4446b0c-e793-4fca-b176-edae345793f3',
            buildHookId: '5f1707f0b29d2149c38cd40d',
            name: 'eytyy-studio',
          },
          {
            title: 'Website',
            apiID: '6e370629-1002-46eb-875a-ab480ce22574',
            buildHookId: '5f1708cf1a564e295830da48',
            name: 'eytyy',
          },
        ],
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited documents',
        order: '_updatedAt desc',
        types: ['post', 'project'],
      },
      layout: {
        width: 'auto',
        height: 'large',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        types: ['post'],
      },
    },
    {
      name: 'project-info',
      layout: {
        width: 'large',
        height: 'small',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'medium',
        height: 'small',
      },
    },
  ],
};
