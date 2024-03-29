import { MigrationInterface, QueryRunner } from "typeorm";

export class Pb1711756016265 implements MigrationInterface {
    name = 'Pb1711756016265'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "autor" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "biografia" character varying NOT NULL, "dataCadastro" TIMESTAMP NOT NULL, CONSTRAINT "PK_51d3959df48c82010ae1c4907fb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "autor"`);
    }

}
