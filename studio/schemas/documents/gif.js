import {MdGif} from 'react-icons/md';

export default {
  title: 'GIF',
  type: 'document',
  name: 'gif',
  icon: MdGif,
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
      name: 'universalDelay',
      type: 'number',
      title: 'Universal Delay',
      initialValue: 60,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'gifImage',
        },
        {
          type: 'gifSvg',
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
      subtitle: 'gif',
      media: media?.[0]?.image || '',
    }),
  },
};
