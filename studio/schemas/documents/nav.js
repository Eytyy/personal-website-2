export default {
  title: "Navigation Menu",
  type: "document",
  name: "navigationMenu",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      type: "array",
      name: "items",
      of: [{ type: "cta" }],
    },
  ],
};
