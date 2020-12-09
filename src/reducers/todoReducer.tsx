import { TypeTodo, TypeTodoAction } from '../types/todoTypes';

export function todoReducer(
  state: TypeTodo[],
  action: TypeTodoAction
): TypeTodo[] {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return [...state.filter((todo) => todo.id !== action.payload)];
    case 'COMPLETE':
      return [];
    case 'UNCOMPLETE':
      return [];
    case 'CLEAR':
      return [];
    default:
      throw new Error(`Action is not supported`);
  }
}
