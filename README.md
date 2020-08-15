# todo-kanban (WIP)

## Personal implementation of a todo kanban board.

Simple todo web kanban web app created with React. Notes are stored on localStorage and persist across multiple sessions!

## How to build and access
- `git clone https://github.com/dylanpjx/todo-kanban.git` -> `npm install` -> `npm run build`
- [Access it here](https://dylanpjx.github.io/todo-kanban/)

## Features completed:
- Single board functionality with custom styles (Material UI)
- Board persistence using localStorage
- React beautiful dnd added
- Markdown syntax now works

## Features planned:
- ~~Store notes on localStorage~~
- ~~Add react-beautiful-dnd for dragging animations~~
- ~~Support markdown syntax~~
- Multi board support with simple navbar
- User authentication
- Use MongoDB to permanently store notes per user (Basic version will use localStorage)
- Multiple board per user with different formats (Paint-like canvas, Kanban, Normal notes)
- Ability to share/collab boards with other users (with real-time updates)
