import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PsqlTodoStatusEnum } from './psql-todo-status.enum';

@Entity('TODOS')
export class PsqlTodoEntity {
  @PrimaryColumn({ type: 'string' })
  id!: string;

  @Column({ type: 'string' })
  description!: string;

  @Column({ type: 'enum', enum: PsqlTodoStatusEnum })
  status!: PsqlTodoStatusEnum;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  static toEntity(params: {
    id: string;
    description: string;
    status: string;
  }): PsqlTodoEntity {
    const entity = new PsqlTodoEntity();
    entity.id = params.id;
    entity.description = params.description;
    entity.status = PsqlTodoStatusEnum[params.status];
    return entity;
  }
}
