export const standard = () => ({
  training: {
    id: 42,
    tags: [{ name: 'mockTag1' }, { name: 'mockTag2' }],
    name: 'mockName',
    blocs: [
      {
        id: 'mockBlocId1',
        title: 'mockBlocTitle1',
        text: 'mockBlockText1',
      },
      {
        id: 'mockBlocId2',
        title: 'mockBlocTitle2',
        layout: {
          id: 'mockBlocLayoutId2',
          gridColumnLevel: 1,
          gridRowLevel: 2,
          balls: [
            {
              id: 'mockPositionedBall1',
              ball: {
                id: 'mockBall1',
                color: 'YELLOW',
              },
              column: 2,
              row: 3,
            },
            {
              id: 'mockBall2',
              ball: {
                id: 'mockBall2',
                number: 3,
              },
              column: 1,
              row: 2,
            },
          ],
        },
      },
    ],
  },
})
