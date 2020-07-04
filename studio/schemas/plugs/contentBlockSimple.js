import { MdViewModule } from "react-icons/md";
export default {
  name: "contentBlockSimple",
  type: "object",
  title: "Simple Content Block",
  icon: MdViewModule,
  fields: [
    {
      name: "blockName",
      type: "string",
      title: "Name",
      description:
        "The section name is for structure organization purposes, and won't be displayed on the frontend.",
    },
    {
      name: "content",
      type: "blockContentSimple",
      title: "Content",
    },
    {
      name: "contentLayout",
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
  ],
};
