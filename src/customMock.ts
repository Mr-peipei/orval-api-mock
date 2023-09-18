import { rest } from 'msw';

export const getGetCustomTodosMock = () =>
  Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => ({
    id: index,
    title: 'タイトル' + index,
    description: '説明' + index,
    isComplete: index % 2 === 0 ? false : true,
  }));

export const getCustomMSW = () => [
  rest.get('*/todos', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetCustomTodosMock()),
    );
  }),
];
