import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GETS_ALL_TODOS_DTO } from '../../application/ports/secondary/gets-all-todos.dto-port';
import { PsqlTodoEntity } from './psql-todo.entity';
import { PsqlTodoEntityRepository } from './psql-todo.entity-repository';

@Module({
  imports: [TypeOrmModule.forFeature([PsqlTodoEntity])],
  providers: [
    PsqlTodoEntityRepository,
    {
      provide: GETS_ALL_TODOS_DTO,
      useExisting: PsqlTodoEntityRepository,
    },
  ],
  exports: [GETS_ALL_TODOS_DTO],
})
export class PsqlTodoEntityModule {}
