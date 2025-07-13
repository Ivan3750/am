export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Опис',
      type: 'text',
    },
    {
      name: 'blocks',
      title: 'Блоки',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'portfolio',
      title: 'Портфоліо',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
}
