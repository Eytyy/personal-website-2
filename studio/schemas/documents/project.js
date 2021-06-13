import {MdGrade} from 'react-icons/md';
import {array} from 'prop-types';

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: MdGrade,
  initialValue: {
    displayType: 'deactivated',
  },
  fieldsets: [
    {
      title: 'Visibility',
      name: 'visibility',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Category',
      type: 'reference',
      name: 'category',
      to: [
        {
          type: 'projectCategory',
        },
      ],
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'mainMedia',
      type: 'gallery',
      title: 'Main Media',
      description: 'Upload one or more video or image.',
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Desciption',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'collaborators',
      title: ' Collaborators',
      type: 'array',
      of: [{type: 'collaboratorReference', title: 'Collaborator'}],
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'externalLink'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These values populate meta tags',
      type: 'openGraph',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
};
