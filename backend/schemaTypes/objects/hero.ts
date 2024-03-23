export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'normalText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
