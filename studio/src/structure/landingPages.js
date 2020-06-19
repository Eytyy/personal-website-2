import S from "@sanity/desk-tool/structure-builder";
import { MdLayers } from "react-icons/md";

export default S.listItem()
  .title("Landing Pages")
  .icon(MdLayers)
  .child(
    S.documentList("page")
      .title("Pages")
      .menuItems(S.documentTypeList("page").getMenuItems())
      .filter('_type == "page" && _id != "frontpage"')
  );
