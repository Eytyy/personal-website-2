export default {
  name: "mediaCollection",
  title: "Media",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      type: "gallery",
      name: "gallery",
      title: "Files",
    },
    {
      name: "mediaLayout",
      title: "Layout",
      type: "string",
      description: "Default is medium",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Big", value: "big" },
          { title: "Full", value: "full" },
        ],
      },
    },
    {
      name: "format",
      type: "string",
      title: "Image Format",
      options: {
        list: [
          { title: "Default: 16:9", value: "default" },
          { title: "Original ratio", value: "original" },
          { title: "Square", value: "square" },
        ],
        layout: "radio",
      },
    },
  ],
};
