import { MdGrade } from "react-icons/md";

export default {
  name: "project",
  type: "document",
  title: "Project",
  icon: MdGrade,
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
      name: "mainMedia",
      type: "gallery",
      title: "Main Media",
      description: "Upload one or more video or image.",
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
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
