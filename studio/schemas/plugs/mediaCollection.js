export default {
  name: 'mediaCollection',
  title: 'Media',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      type: 'gallery',
      name: 'gallery',
      title: 'Files',
    },
    {
      name: 'mediaLayout',
      title: 'Layout',
      type: 'string',
      description: 'Default is medium',
      options: {
        list: [
          {title: 'Small', value: 'small'},
          {title: 'Big', value: 'big'},
          {title: 'Full', value: 'full'},
        ],
      },
    },
  ],
};
