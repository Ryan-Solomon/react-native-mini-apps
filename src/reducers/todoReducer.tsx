import { TypeTodo, TypeTodoAction } from '../types/todoTypes';

export function todoReducer(
  state: TypeTodo[],
  action: TypeTodoAction
): TypeTodo[] {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return [];
    case 'COMPLETE':
      return [];
    case 'UNCOMPLETE':
      return [];
    default:
      throw new Error(`Action is not supported`);
  }
}
