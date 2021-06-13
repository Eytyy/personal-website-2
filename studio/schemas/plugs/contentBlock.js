import {MdViewModule} from 'react-icons/md';
export default {
  name: 'contentBlock',
  type: 'object',
  title: 'Content Block',
  icon: MdViewModule,
  fieldsets: [
    {
      title: 'Media',
      name: 'media',
    },
    {
      title: 'Content',
      name: 'content',
    },
  ],
  fields: [
    {
      name: 'blockName',
      type: 'string',
      title: 'Name',
      description:
        "The section name is for structural organization purposes, and won't be displayed on the frontend.",
    },

    {
      name: 'content',
      type: 'blockContent',
      title: 'Content',
      fieldset: 'content',
    },
    {
      name: 'contentLayout',
      title: 'Layout',
      type: 'string',
      description: 'Default is medium',
      options: {
        list: [
          {title: 'Small', value: 'small'},
          {title: 'Big', value: 'big'},
          {title: 'Full', value: 'full'},
        ],
      },
      fieldset: 'content',
    },
    {
      name: 'media',
      type: 'gallery',
      title: 'Files',
      fieldset: 'media',
    },
  ],
};
