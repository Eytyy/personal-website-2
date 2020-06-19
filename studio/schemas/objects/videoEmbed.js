import React from "react";

export default {
  type: "object",
  name: "videoEmbed",
  title: "Video",
  fieldsets: [
    {
      name: "settings",
      title: "Settings",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "posterFrame",
    },
    prepare({ title, media }) {
      return {
        title: "Video",
        media,
        subtitle: title,
      };
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "posterFrame",
      type: "figure",
      title: "Poster frame",
      options: {
        hotspot: true,
      },
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
    {
      name: "video",
      title: "Video",
      description: (
        <span>
          You can either use a url, or upload a video.
          <br />
          For file uploads
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats">
            recomended types
          </a>{" "}
          are Priciwebm and mp4
        </span>
      ),
      type: "video",
    },
  ],
};
