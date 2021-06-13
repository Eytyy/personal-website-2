export default {
  title: 'GIF Item',
  type: 'object',
  name: 'gifItem',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'delay',
      type: 'number',
      title: 'Delay',
      initialValue: 0,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
