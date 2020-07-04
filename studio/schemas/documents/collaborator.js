import { MdSubject } from "react-icons/md";

export default {
  name: "collaborator",
  type: "document",
  title: "Collaborator",
  icon: MdSubject,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
  ],
};
