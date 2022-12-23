import { DataSource } from 'typeorm';

const modulePath = './libs/todo';
const migrationsDir = './libs/todo/src/lib/adapters/secondary/migrations';
// const dbUriConnectionString = `postgres://${dbConnectionString.username}:${dbConnectionString.password}@${dbConnectionString.host}:${dbConnectionString.port}/${dbConnectionString.database}`;
const dbUriConnectionString = 'postgres://postgres:postgres@localhost:5433/postgres';

export const PsqlTodoEntityDatasource = new DataSource({
  type: 'postgres',
  url: dbUriConnectionString,
  entities: [`${modulePath}/**/*.entity.ts`],
  migrations: [`${migrationsDir}/*.ts`],
  synchronize: false
});
