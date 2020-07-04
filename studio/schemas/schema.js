// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// documents
import nav from "./documents/nav";
import siteSettings from "./documents/siteSettings";
import route from "./documents/route";
import page from "./documents/page";
import post from "./documents/post";
import project from "./documents/project";
import collaborator from "./documents/collaborator";
import collaboratorReference from "./objects/collaboratorReference";
import projectCategory from "./documents/project-category";

// objects
import figure from "./objects/figure";
import videoEmbed from "./objects/videoEmbed";
import video from "./objects/video";

import gallery from "./objects/gallery";
import openGraph from "./objects/openGraph";
import cta from "./objects/cta";

import blockContentSimple from "./objects/blockContentSimple";
import blockContent from "./objects/blockContent";

import contentPreview from "./objects/contentPreview";
import externalLink from "./objects/externalLink";

import * as plugs from "./plugs";

const allPlugs = Object.values(plugs).map((plug) => {
  return plug;
});

export default createSchema({
  name: "default",
  types: schemaTypes
    .concat([
      blockContentSimple,
      blockContent,

      externalLink,

      nav,
      page,
      siteSettings,
      route,

      figure,
      videoEmbed,
      video,
      gallery,
      openGraph,

      post,

      project,
      projectCategory,
      collaborator,
      collaboratorReference,

      contentPreview,
      cta,
    ])
    .concat(allPlugs),
});
