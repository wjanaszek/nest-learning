import { Module } from '@nestjs/common';
import { GetsAllTodosQueryAdapter } from './adapters/primary/gets-all-todos.query-adapter';
import { PsqlTodoEntityModule } from './adapters/secondary/psql-todo.entity-module';
import { GETS_ALL_TODOS_QUERY } from './application/ports/primary/gets-all-todos.query-port';

@Module({
  imports: [PsqlTodoEntityModule],
  providers: [
    {
      provide: GETS_ALL_TODOS_QUERY,
      useClass: GetsAllTodosQueryAdapter,
    },
  ],
  exports: [GETS_ALL_TODOS_QUERY],
})
export class TodoModule {}
