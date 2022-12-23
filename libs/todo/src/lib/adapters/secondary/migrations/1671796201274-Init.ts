import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1671796201274 implements MigrationInterface {
  name = 'Init1671796201274';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."todos_status_enum" AS ENUM('New', 'InProgress', 'Completed')`
    );
    await queryRunner.query(
      `CREATE TABLE "todos" ("id" text NOT NULL, "description" text NOT NULL, "status" "public"."todos_status_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todos"`);
    await queryRunner.query(`DROP TYPE "public"."todos_status_enum"`);
  }
}
