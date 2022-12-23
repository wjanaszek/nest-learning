import { Module } from '@nestjs/common';
import { TodoModule } from '@wojjan-io/todo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
