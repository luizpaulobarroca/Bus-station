import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseEntities1608415289812 implements MigrationInterface {
    name = 'BaseEntities1608415289812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bus" ("id" SERIAL NOT NULL, "plate" character varying NOT NULL, "year" integer NOT NULL, "model" character varying NOT NULL, CONSTRAINT "PK_bd7b8b319eb7958e876584d02d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "passenger" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "cpf" character varying NOT NULL, "busId" integer, CONSTRAINT "PK_50e940dd2c126adc20205e83fac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bus" ADD "seats" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bus" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "bus" ADD CONSTRAINT "FK_23e2e06868b1ae1cccacec2bba6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "passenger" ADD CONSTRAINT "FK_c3549759d560b5032cde34da8bd" FOREIGN KEY ("busId") REFERENCES "bus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "passenger" DROP CONSTRAINT "FK_c3549759d560b5032cde34da8bd"`);
        await queryRunner.query(`ALTER TABLE "bus" DROP CONSTRAINT "FK_23e2e06868b1ae1cccacec2bba6"`);
        await queryRunner.query(`ALTER TABLE "bus" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "bus" DROP COLUMN "seats"`);
        await queryRunner.query(`DROP TABLE "passenger"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "bus"`);
    }

}
