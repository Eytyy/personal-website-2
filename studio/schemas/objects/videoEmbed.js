import React from 'react';

export default {
  type: 'object',
  name: 'videoEmbed',
  title: 'Video',

  preview: {
    select: {
      title: 'title',
      media: 'posterFrame',
    },
    prepare({title, media}) {
      return {
        title: 'Video',
        media,
        subtitle: title,
      };
    },
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'posterFrame',
      type: 'figure',
      title: 'Poster frame',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'video',
      title: 'Video',
      type: 'video',
    },
  ],
};
