export default {
  name: "video",
  title: "Video",
  type: "object",
  description:
    "Upload an .mp4 file or paste the video url. Supported video platforms: youtube, and vimeo",
  fieldsets: [
    {
      name: "settings",
      title: "Video Settings",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  preview: {
    select: {
      file: "file.asset.originalFilename",
      size: "file.asset.size",
      media: "media",
      type: "type",
    },
    prepare(selection) {
      return {
        title: selection.file,
        subtitle: `${Math.round(selection.size / 1024 / 1024)}Mb ${
          selection.type || ""
        } ${selection.media || ""}`,
      };
    },
  },
  fields: [
    {
      name: "file",
      title: "File",
      type: "file",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "muted",
      title: "Muted",
      description: "Must be true if autoplay",
      type: "boolean",
      fieldset: "settings",
    },
    {
      name: "loop",
      title: "Loop",
      type: "boolean",
      fieldset: "settings",
    },
    {
      name: "preload",
      title: "Preload",
      type: "string",
      fieldset: "settings",
      options: {
        list: ["auto", "none", "metadata"],
      },
    },
    {
      name: "format",
      title: "Video Format",
      type: "string",
      fieldset: "settings",
      options: {
        layout: "radio",
        list: [
          {
            title: "Default",
            value: "default",
          },
          {
            title: "Square",
            value: "square",
          },
        ],
      },
    },
    {
      name: "autoplay",
      title: "Auto play",
      type: "string",
      fieldset: "settings",
      options: {
        layout: "radio",
        list: [
          {
            title: "None",
            value: "off",
          },
          {
            title: "Always",
            value: "on",
          },
          {
            title: "When in viewport",
            value: "viewport",
          },
        ],
      },
    },
  ],
};
