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

// objects
import figure from "./objects/figure";
import videoEmbed from "./objects/videoEmbed";
import video from "./objects/video";

import gallery from "./objects/gallery";
import openGraph from "./objects/openGraph";
import cta from "./objects/cta";
import blockContent from "./objects/blockContent";
import contentList from "./objects/contentList";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    nav,
    page,
    siteSettings,
    route,
    figure,
    videoEmbed,
    video,
    gallery,
    openGraph,
    cta,
    blockContent,
    post,
    project,
    contentList,
  ]),
});
