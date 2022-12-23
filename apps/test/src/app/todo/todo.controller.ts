import { Controller, Get, Inject } from '@nestjs/common';
import {
  GETS_ALL_TODOS_QUERY,
  GetsAllTodosQueryPort,
  TodoQuery,
} from '@wojjan-io/todo';

@Controller('todos')
export class TodoController {
  constructor(
    @Inject(GETS_ALL_TODOS_QUERY)
    private _getsAllTodosQuery: GetsAllTodosQueryPort
  ) {}

  @Get()
  listOfTodos(): Promise<TodoQuery[]> {
    return this._getsAllTodosQuery.getAll();
  }
}
