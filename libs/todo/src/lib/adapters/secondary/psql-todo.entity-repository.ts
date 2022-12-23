import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetsAllTodosDtoPort } from '../../application/ports/secondary/gets-all-todos.dto-port';
import { TodoDto } from '../../application/ports/secondary/todo.dto';
import { PsqlTodoEntity } from './psql-todo.entity';

@Injectable()
export class PsqlTodoEntityRepository implements GetsAllTodosDtoPort {
  constructor(
    @InjectRepository(PsqlTodoEntity)
    private _repository: Repository<PsqlTodoEntity>
  ) {}

  getAll(): Promise<TodoDto[]> {
    return this._repository.find();
  }
}
