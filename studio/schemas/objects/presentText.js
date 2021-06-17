import {MdTextFields} from 'react-icons/md';

export default {
  icon: MdTextFields,
  type: 'object',
  name: 'presentText',
  title: 'Text',
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
      name: 'body',
      type: 'presentContentBlock',
      title: 'Body',
    },
  ],
};
