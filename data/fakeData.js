const fakeData = [
  {
    id: 0,
    name: 'To Do app',
    repository: 'https://github.com/nicolasg02',
    live: 'https://www.google.com',
    overview: {
      description: 'Simple to do app with ReactJS and styles components.',
      readme: '',
    },
    changelog: {
      version: {
        1: {
          number: '0.0.1',
          changes:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          changeType: 'update',
        },
      },
    },
    stack: {},
    assets: {},
    todo: {},
  },
  {
    id: 1,
    name: 'Personal blog',
    repository: 'https://github.com/nicolasg02',
    live: 'https://www.google.com',
    overview: {
      description: 'My personal blog with programming related articles.',
      readme: '',
    },
    changelog: {
      version: {
        1: {
          number: '0.0.1',
          changes:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
          changeType: 'bugfix',
        },
      },
    },
    stack: {},
    assets: {},
    todo: {},
  },
];

export default fakeData;
