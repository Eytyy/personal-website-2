import React from "react";

export default {
  type: "object",
  name: "videoEmbed",
  title: "Video",

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
