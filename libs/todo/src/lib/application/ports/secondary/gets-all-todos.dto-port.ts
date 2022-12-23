import { TodoDto } from './todo.dto';

export const GETS_ALL_TODOS_DTO = 'GETS_ALL_TODOS_DTO';

export interface GetsAllTodosDtoPort {
  getAll(): Promise<TodoDto[]>;
}
