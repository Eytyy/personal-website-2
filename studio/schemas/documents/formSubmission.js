export default {
  name: 'submission',
  type: 'document',
  title: 'Submission',
  preview: {
    select: {
      name: 'name',
    },
    prepare: ({name, _createdAt}) => {
      return {
        title: `Form submission from ${name}`,
      };
    },
  },
  fields: [
    {
      name: 'submissionInput',
      type: 'array',
      title: 'Submission',
      of: [
        {
          name: 'answers',
          type: 'answers',
        },
      ],
      options: {
        formattedSubmission: true,
      },
    },
    {
      name: 'name',
      type: 'string',
      title: 'name',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'email',
      type: 'string',
      title: 'email',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'message',
      type: 'text',
      title: 'message',
      readOnly: true,
      hidden: true,
    },
  ],
};
