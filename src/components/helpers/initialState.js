var _todoIndex = 0;
var _colIndex = 0;
var _boardIndex = 0;

const createBoard = (header, cols, id = _boardIndex++) => {
  return { id, header, cols };
};

const createCol = (label, tasks, isNew = false, id = _colIndex++) => {
  return { id, label, tasks, isNew };
};

const createTask = (colId, content, isNew = false, id = _todoIndex++) => {
  return { id, colId, content, isNew };
};

const initialState = {
  currBoard: 0,
  boards: [
    createBoard('Project Name', [
      createCol('Todo', [createTask(0, 'Click inside to edit.')]),
      createCol('Doing', [
        createTask(1, 'Try adding a task by clicking the button below.'),
      ]),
      createCol('Done', []),
    ]),
  ],
};

export default initialState;
