export default {
  name: 'blogPost',
  title: 'Блог',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required().min(5),
    },
    {
      name: 'description',
      title: 'Короткий опис',
      type: 'text',
    },
    {
      name: 'type',
      title: 'Категорія',
      type: 'string',
      options: {
        list: [
          { title: 'Новини', value: 'news' },
          { title: 'Поради', value: 'tips' },
          { title: 'Інтервʼю', value: 'interview' },
          { title: 'Кейси', value: 'case' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Головне зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Контент',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'publishedAt',
      title: 'Дата публікації',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
