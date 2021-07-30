import {FiGrid} from 'react-icons/fi';

export default {
  type: 'object',
  name: 'presentGrid',
  title: 'Text',
  icon: FiGrid,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Sub-Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
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
          title: 'SVG',
        },
      ],
    },
  ],
};
