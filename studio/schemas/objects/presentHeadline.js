import {MdTitle} from 'react-icons/md';

export default {
  name: 'presentHeadline',
  type: 'object',
  title: 'Headline',
  icon: MdTitle,
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
      name: 'headline',
      type: 'presentContentBlock',
      title: 'Headline',
    },
  ],
};
