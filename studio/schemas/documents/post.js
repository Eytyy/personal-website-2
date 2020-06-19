import { MdSubject } from "react-icons/md";

export default {
  name: "post",
  type: "document",
  title: "Post",
  icon: MdSubject,
  fieldsets: [
    {
      title: "Visibility",
      name: "visibility",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      description: "This is the post path it will accessible on",
      title: "Path",
      options: {
        source: "title",
      },
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description: "These values populate meta tags",
      type: "openGraph",
    },
    {
      title: "Include in sitemap",
      description: "For search engines. Will be generateed to /sitemap.xml",
      name: "includeInSitemap",
      type: "boolean",
      fieldset: "visibility",
    },
    {
      title: "Disallow in robots.txt",
      description: "Hide this route for search engines like google",
      name: "disallowRobots",
      type: "boolean",
      fieldset: "visibility",
    },
  ],
};
