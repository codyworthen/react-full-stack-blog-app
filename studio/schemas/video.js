export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'author',
      type: 'string',
    },
    {
      name: 'date',
      type: 'datetime',
    },

    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'link',
      type: 'url',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
};
