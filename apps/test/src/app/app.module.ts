import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from '@wojjan-io/todo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [],
      synchronize: false,
    }),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
