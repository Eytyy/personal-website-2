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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'gif',
        },
      ],
    },
  ],
};
