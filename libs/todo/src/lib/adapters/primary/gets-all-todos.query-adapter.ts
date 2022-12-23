import { Inject, Injectable } from '@nestjs/common';
import { GetsAllTodosQueryPort } from '../../application/ports/primary/gets-all-todos.query-port';
import {
  TodoQuery,
  TodoStatusEnum,
} from '../../application/ports/primary/todo.query';
import {
  GETS_ALL_TODOS_DTO,
  GetsAllTodosDtoPort,
} from '../../application/ports/secondary/gets-all-todos.dto-port';

@Injectable()
export class GetsAllTodosQueryAdapter implements GetsAllTodosQueryPort {
  constructor(
    @Inject(GETS_ALL_TODOS_DTO) private _getsAllTodosDto: GetsAllTodosDtoPort
  ) {}

  async getAll(): Promise<TodoQuery[]> {
    const dtos = await this._getsAllTodosDto.getAll();

    return dtos.map((dto) => ({
      id: dto.id,
      description: dto.description,
      status: TodoStatusEnum[dto.status],
    }));
  }
}
