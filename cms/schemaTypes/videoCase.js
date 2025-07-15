export default {
  name: 'videoCase',
  title: 'Відео Кейс',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва відео',
      type: 'string',
      validation: Rule => Rule.required().min(3).error('Назва обовʼязкова та має містити мінімум 3 символи.'),
    },
    {
      name: 'type',
      title: 'Категорія',
      type: 'string',
      options: {
        list: [
          { title: 'Подкасти', value: 'podcast' },
          { title: 'Експертні відео', value: 'expert' },
          { title: "Zoom інтервʼю", value: 'zoom' },
          { title: 'Стріми', value: 'stream' },
          { title: 'Курси', value: 'course' },
        ],
      },
      validation: Rule => Rule.required().error('Оберіть категорію.'),
    },
    {
      name: 'url',
      title: 'Посилання на відео',
      type: 'url',
      validation: Rule => Rule.required().uri({ scheme: ['http', 'https'] }).error('Введіть коректне посилання.'),
    }
  ],
};
