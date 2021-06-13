export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  description:
    'Upload an .mp4 file or paste the video url. Supported video platforms: youtube, and vimeo',
  preview: {
    select: {
      file: 'file.asset.originalFilename',
      size: 'file.asset.size',
      media: 'media',
      type: 'type',
    },
    prepare(selection) {
      return {
        title: selection.file,
        subtitle: `${Math.round(selection.size / 1024 / 1024)}Mb ${
          selection.type || ''
        } ${selection.media || ''}`,
      };
    },
  },
  fields: [
    {
      name: 'file',
      title: 'File',
      type: 'file',
    },
  ],
};
