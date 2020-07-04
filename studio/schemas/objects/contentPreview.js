import { MdViewModule } from "react-icons/md";
export default {
  name: "contentPreview",
  type: "object",
  title: "Content Preview",
  icon: MdViewModule,
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "figure",
      type: "figure",
      title: "Image",
    },
    {
      type: "video",
      name: "video",
      title: "Video",
    },
    {
      type: "url",
      name: "externalLink",
      title: "External Link",
      description:
        "Optional. Use this if you want to link the content preview to an external link.",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
};
