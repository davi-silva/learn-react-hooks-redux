/* eslint-disable import/prefer-default-export */
export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LEASSON',
    module,
    lesson,
  };
}
