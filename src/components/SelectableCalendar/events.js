

export default [
  {
    id: 0,
    title: 'Carbonels',
    allDay: true,
    start: new Date().setDate(new Date().getDate() + 1),
    end: new Date().setDate(new Date().getDate() + 2),
  },
  {
    id: 1,
    title: 'Suns',
    start: new Date().setDate(new Date().getDate() + 4),
    end: new Date().setDate(new Date().getDate() + 6),
  },

  {
    id: 1,
    title: 'Natalie',
    start: new Date().setDate(new Date().getDate() + 7),
    end: new Date().setDate(new Date().getDate() + 8),
  },
  {
    id: 1,
    title: 'Casey',
    start: new Date().setDate(new Date().getDate() - 9),
    end: new Date().setDate(new Date().getDate() - 8),
  },
  {
    id: 1,
    title: 'Marcus',
    start: new Date().setDate(new Date().getDate() - 8),
    end: new Date().setDate(new Date().getDate() - 6),
  },
  {
    id: 14,
    title: 'Maddie',
    start: new Date(new Date().setHours(new Date().getHours() - 5)),
    end: new Date(new Date().setHours(new Date().getHours() - 3)),
  },

]