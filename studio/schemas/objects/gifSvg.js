export default {
  title: 'GIF SVG',
  type: 'document',
  name: 'gifSvg',
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
      name: 'svg',
      title: 'SVG Reference',
      type: 'reference',
      to: [{type: 'svgSnippet'}],
    },
    {
      name: 'snippet',
      title: 'SVG Snippet',
      type: 'text',
    },
  ],
};
