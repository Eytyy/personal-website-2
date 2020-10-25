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
      name: 'displayType',
      title: 'Display Type',
      type: 'string',
      options: {
        list: [
          {title: 'Link', value: 'link'},
          {title: 'Simple', value: 'simple'},
          {title: 'Detailed', value: 'detailed'},
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      description: 'Add, edit, and reorder sections',
      of: [
        {
          name: 'headline',
          type: 'headline',
          title: 'Headline',
        },
        {
          title: 'Content Block',
          name: 'contentBlock',
          type: 'contentBlock',
        },
        {
          title: 'Simple Content Block',
          name: 'contentBlockSimple',
          type: 'contentBlockSimple',
        },
        {
          title: 'Media',
          name: 'mediaCollection',
          type: 'mediaCollection',
        },
      ],
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
      name: 'preview',
      type: 'contentPreview',
      title: 'Preview',
      description:
        'Customize content preview. When left empty, the preview will only show the original content title.',
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
    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generateed to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
      fieldset: 'visibility',
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines like google',
      name: 'disallowRobots',
      type: 'boolean',
      fieldset: 'visibility',
    },
  ],
};
