export default {
  name: 'svg',
  type: 'object',
  title: 'SVG',
  fields: [
    {
      name: 'code',
      type: 'text',
      title: 'Markup',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
    prepare: ({title}) => ({
      title,
      subtitle: 'svg',
    }),
  },
};
