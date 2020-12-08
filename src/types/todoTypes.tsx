export type TypeTodo = {
  title: string;
  completed: boolean;
  id: number;
};

export type TypeTodoAction =
  | {
      type: 'ADD';
      payload: TypeTodo;
    }
  | {
      type: 'REMOVE';
      payload: number;
    }
  | {
      type: 'COMPLETE';
      payload: number;
    }
  | {
      type: 'UNCOMPLETE';
      payload: number;
    };
