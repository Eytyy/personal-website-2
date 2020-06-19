import S from "@sanity/desk-tool/structure-builder";
import { MdMenu, MdPlaylistAdd } from "react-icons/md";

export default S.listItem()
  .title("Navigation Settings")
  .icon(MdMenu)
  .child(
    S.list()
      .title("Navigation Settings")
      .items([
        S.listItem()
          .title("Menus")
          .icon(MdMenu)
          .schemaType("navigationMenu")
          .child(S.documentTypeList("navigationMenu").title("Menu")),
        S.listItem()
          .title("Routes")
          .schemaType("route")
          .child(
            S.documentTypeList("route")
              .title("Routes")
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("route")
                  .views([S.view.form()])
              )
          ),
      ])
  );
