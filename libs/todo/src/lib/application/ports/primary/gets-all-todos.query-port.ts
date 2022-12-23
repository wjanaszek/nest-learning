import { TodoQuery } from './todo.query';

export const GETS_ALL_TODOS_QUERY = 'GETS_ALL_TODOS_QUERY';

export interface GetsAllTodosQueryPort {
  getAll(): Promise<TodoQuery[]>;
}
