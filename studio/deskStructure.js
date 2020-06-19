import S from "@sanity/desk-tool/structure-builder";
import { MdHome, MdTune, MdSubject, MdGrade } from "react-icons/md";
import landingPages from "./src/structure/landingPages";
import navigation from "./src/structure/navigation";
import PreviewIFrame from "./src/components/previewIFrame";

const hiddenDocTypes = (listItem) =>
  ![
    "route",
    "navigationMenu",
    "post",
    "project",
    "page",
    "siteSettings",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .schemaType("siteSettings")
        .title("Site settings")
        .icon(MdTune)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .views([S.view.form(), PreviewIFrame()])
        ),
      navigation,
      S.divider(),
      S.documentListItem()
        .title("Frontpage")
        .schemaType("page")
        .icon(MdHome)
        .child(
          S.document()
            .schemaType("page")
            .documentId("frontpage")
            .views([S.view.form(), PreviewIFrame()])
        ),
      landingPages,
      S.divider(),
      S.listItem("project")
        .icon(MdGrade)
        .title("Projects")
        .child(
          S.documentTypeList("project")
            .title("Projects")
            .child((documentId) =>
              S.document(documentId)
                .schemaType("project")
                .views([S.view.form(), PreviewIFrame()])
            )
        ),

      S.listItem("posts")
        .icon(MdSubject)
        .title("Blog")
        .child(
          S.documentTypeList("post")
            .title("Blog Posts")
            .child((documentId) =>
              S.document(documentId)
                .schemaType("post")
                .views([S.view.form(), PreviewIFrame()])
            )
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
