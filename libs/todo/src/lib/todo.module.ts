import { Module } from '@nestjs/common';
import { GetsAllTodosQueryAdapter } from './adapters/primary/gets-all-todos.query-adapter';
import { GETS_ALL_TODOS_QUERY } from './application/ports/primary/gets-all-todos.query-port';

@Module({
  controllers: [],
  providers: [
    {
      provide: GETS_ALL_TODOS_QUERY,
      useClass: GetsAllTodosQueryAdapter,
    },
  ],
  exports: [GETS_ALL_TODOS_QUERY],
})
export class TodoModule {}
