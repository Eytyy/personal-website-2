export default {
  name: 'figure',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'format',
      type: 'string',
      title: 'format',
      description: 'If empty, the image will retain the original aspect ration',
      options: {
        isHighlighted: true,
        list: ['square', 'landscape'],
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
      subtitle: 'format',
    },
    prepare: ({imageUrl, title, subtitle}) => ({
      imageUrl,
      title,
      subtitle: `format: ${subtitle || 'default'}`,
    }),
  },
};
