import { MdSubject } from "react-icons/md";

export default {
  name: "collaboratorReference",
  type: "object",
  title: "Collaborator Reference",
  icon: MdSubject,
  fields: [
    {
      name: "collaborator",
      type: "reference",
      title: "Collaborator",
      to: [{ type: "collaborator" }],
    },
    {
      name: "role",
      type: "string",
      title: "Role",
    },
  ],
};
