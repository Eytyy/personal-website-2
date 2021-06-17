import {MdImage} from 'react-icons/md';

export default {
  name: 'presentImage',
  type: 'image',
  title: 'Image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
    prepare: ({imageUrl, title, subtitle}) => ({
      imageUrl,
      subtitle: 'image',
      title,
    }),
  },
};
