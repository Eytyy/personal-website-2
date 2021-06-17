import {FiExternalLink} from 'react-icons/fi';

export default {
  title: 'Presentation Content Block',
  name: 'presentContentBlock',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            name: 'internalLink',
            title: 'Internal Link',
            type: 'object',
            fields: [
              {
                name: 'item',
                type: 'reference',
                to: {type: 'project'},
              },
            ],
          },
          {
            icon: FiExternalLink,
            title: 'External Link',
            name: 'externalLink',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
                description:
                  'mailto:address@mail.com,  http://www.google.com or https://www.google.com, tel:00962999999',
              },
              {
                title: 'Open in a new window',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'presentImage',
    },
  ],
};
