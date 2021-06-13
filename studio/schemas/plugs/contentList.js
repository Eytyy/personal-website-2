import {MdViewModule} from 'react-icons/md';
export default {
  name: 'contentList',
  type: 'object',
  title: 'Content List',
  icon: MdViewModule,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}, {type: 'post'}]}],
    },
  ],
};
