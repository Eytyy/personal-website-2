export default {
  title: 'Presentation',
  type: 'document',
  name: 'presentation',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client',
    },
    {
      name: 'scope',
      type: 'string',
      title: 'Scope',
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'presentText',
        },
        {
          type: 'presentHeadline',
        },
        {
          type: 'presentImage',
        },
        {
          type: 'presentGrid',
          title: 'Grid',
        },
        {
          type: 'gif',
          title: 'GIF',
        },
        {
          type: 'reference',
          title: 'GIF Ref.',
          to: [{type: 'gif'}],
        },
        {
          type: 'svg',
        },
      ],
    },
  ],
};
