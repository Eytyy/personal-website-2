export default {
  title: 'GIF',
  type: 'document',
  name: 'gif',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'loop',
      type: 'boolean',
      title: 'Loop',
      initialValue: false,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'gifItem',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'content',
    },
    prepare: ({media, title}) => ({
      title: title,
      media: media?.[0]?.image || '',
    }),
  },
};
