export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "siteNavigation",
      type: "reference",
      validation: (Rule) => Rule.required(),
      description: "Choose the menu you want to use as the main one.",
      to: [
        {
          type: "navigationMenu",
        },
      ],
    },
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "These will be the default meta tags on all pages that have not set their own",
      type: "openGraph",
    },
  ],
};
