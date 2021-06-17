import {mq} from '../../../web/src/styles/utils';

export default {
  title: 'Presentation',
  type: 'document',
  name: 'presentation',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Client',
    },
    {
      name: 'scope',
      type: 'string',
      title: 'Scope',
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'presentText',
        },
        {
          type: 'presentHeadline',
        },
        {
          type: 'presentImage',
        },
        {
          type: 'gif',
        },
        {
          type: 'svg',
        },
      ],
    },
  ],
};
