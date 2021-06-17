export default {
  title: 'GIF Item Image',
  type: 'object',
  name: 'gifImage',
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
