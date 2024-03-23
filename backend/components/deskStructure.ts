export const deskStructure = (S: any, context: any) =>
  S.list()
    .title('Astro Playground')
    .items([
      S.listItem().title('Home Page').child(S.editor().schemaType('home').documentId('home')),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem: any) => !['media.tag', 'home'].includes(listItem.getId()),
      ),
    ])
