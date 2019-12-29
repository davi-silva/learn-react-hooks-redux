const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: 'Starting with React',
      lesson: [
        { id: 1, title: 'First Leasson' },
        { id: 2, title: 'Second Leasson' },
      ],
    },
    {
      id: 2,
      title: 'Dive into React',
      lesson: [
        { id: 3, title: 'Third Leasson' },
        { id: 4, title: 'Fourth Leasson' },
      ],
    },
    {
      id: 2,
      title: 'Hello World',
      lesson: [
        { id: 5, title: 'Sixth Leasson' },
        { id: 6, title: 'Seventh Leasson' },
      ],
    },
  ],
};

export default function modules(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_LEASSON':
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      };
    default:
      return state;
  }
}
