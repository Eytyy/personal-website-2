import { MdLayers } from "react-icons/md";

export default {
  type: "document",
  name: "page",
  title: "Page",
  icon: MdLayers,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "array",
      title: "Page Sections",
      description: "Add, edit, and reorder sections",
      of: [
        {
          title: "Simple Content Block",
          type: "contentBlockSimple",
        },
        {
          title: "Content Block",
          type: "contentBlock",
        },
        {
          title: "Content List",
          type: "contentList",
        },
      ],
    },
  ],
};
