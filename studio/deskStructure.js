import S from '@sanity/desk-tool/structure-builder';
import {MdHome, MdTune, MdSubject, MdGrade, MdGif} from 'react-icons/md';
import {RiProjector2Fill} from 'react-icons/ri';
import {ImSvg} from 'react-icons/im';
import navigation from './src/structure/navigation';
import PreviewIFrame from './src/components/previewIFrame';

const hiddenDocTypes = (listItem) =>
  ![
    'route',
    'navigationMenu',
    'post',
    'project',
    'presentation',
    'page',
    'siteSettings',
    'gif',
    'gifSvg',
    'svgSnippet',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(MdTune)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form(), PreviewIFrame()])
        ),
      navigation,
      S.divider(),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(MdHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('frontpage')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.divider(),
      S.listItem('project')
        .icon(MdGrade)
        .title('Projects')
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .child((documentId) =>
              S.document(documentId)
                .schemaType('project')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),

      S.listItem('posts')
        .icon(MdSubject)
        .title('Blog')
        .child(
          S.documentTypeList('post')
            .title('Blog Posts')
            .child((documentId) =>
              S.document(documentId)
                .schemaType('post')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),

      S.listItem('presentation')
        .icon(RiProjector2Fill)
        .title('Presentations')
        .child(
          S.documentTypeList('presentation')
            .title('Presentations')
            .child((documentId) =>
              S.document(documentId)
                .schemaType('presentation')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),

      S.listItem('gif')
        .icon(MdGif)
        .title('Gifs')
        .child(
          S.documentTypeList('gif')
            .title('Gifs')
            .child((documentId) =>
              S.document(documentId)
                .schemaType('gif')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),

      S.listItem('svgSnippet')
        .icon(ImSvg)
        .title('SVG Snippets')
        .child(
          S.documentTypeList('svgSnippet')
            .title('SVG Snippets')
            .child((documentId) =>
              S.document(documentId)
                .schemaType('svgSnippet')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
