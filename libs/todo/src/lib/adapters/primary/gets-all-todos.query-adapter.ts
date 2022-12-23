import { Injectable } from '@nestjs/common';
import { GetsAllTodosQueryPort } from '../../application/ports/primary/gets-all-todos.query-port';
import {
  TodoQuery,
  TodoStatusEnum,
} from '../../application/ports/primary/todo.query';

@Injectable()
export class GetsAllTodosQueryAdapter implements GetsAllTodosQueryPort {
  getAll(): Promise<TodoQuery[]> {
    return Promise.resolve([
      { id: '1', status: TodoStatusEnum.New, description: 'some description' },
      {
        id: '2',
        status: TodoStatusEnum.Completed,
        description: 'completed one',
      },
    ]);
  }
}
