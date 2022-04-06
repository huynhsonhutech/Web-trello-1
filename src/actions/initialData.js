export const initialData = {
  boards: [
    {
      id: "board-1",
      columnOder: ["column-1", "column-2", "column-3"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "To do column",
          cardOder: ["card-1", "card-2", "card-3", "card-4"],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 1",
              cover: "logo192.png",
            },
            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 2",
              cover: null,
            },
            {
              id: "card-3",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 3",
              cover: null,
            },
            {
              id: "card-4",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 4",
              cover: null,
            },
          ],
        },

        {
          id: "column-2",
          boardId: "board-1",
          title: "Inprogess column",
          cardOder: ["card-5", "card-6", "card-7", "card-8"],
          cards: [
            {
              id: "card-5",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 5",
              cover: null,
            },
            {
              id: "card-6",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 6",
              cover: null,
            },
            {
              id: "card-7",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 7",
              cover: null,
            },
            {
              id: "card-8",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 8",
              cover: null,
            },
          ],
        },

        {
          id: "column-3",
          boardId: "board-1",
          title: "Done column",
          cardOder: ["card-9", "card-10", "card-11", "card-12"],
          cards: [
            {
              id: "card-9",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 9",
              cover: null,
            },
            {
              id: "card-10",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 10",
              cover: null,
            },
            {
              id: "card-11",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 11",
              cover: null,
            },
            {
              id: "card-12",
              boardId: "board-1",
              columnId: "column-1",
              title: "title card 12",
              cover: null,
            },
          ],
        },
      ],
    },
  ],
};
