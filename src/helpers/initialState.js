const initialState = {
  boards: {
    'board-0': {
      id: 'board-0',
      header: 'Template board',
      colIds: ['col-0', 'col-1', 'col-2'],
    },
  },
  cols: {
    'col-0': {
      id: 'col-0',
      label: 'Todo',
      taskIds: ['task-0'],
    },
    'col-1': {
      id: 'col-1',
      label: 'Doing',
      taskIds: ['task-1'],
    },

    'col-2': {
      id: 'col-2',
      label: 'Done',
      taskIds: ['task-2'],
    },
  },
  tasks: {
    'task-0': {
      id: 'task-0',
      content: 'Click inside any of the text fields to edit',
    },
    'task-1': {
      id: 'task-1',
      content: 'Try dragging the tasks and cols around to reorder them',
    },
    'task-2': {
      id: 'task-2',
      content: 'The notes support markdown syntax',
    },
  },

  boardOrder: ['board-0'],
};

export default initialState;
