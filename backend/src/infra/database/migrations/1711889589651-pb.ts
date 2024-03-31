import { MigrationInterface, QueryRunner } from "typeorm";

export class Pb1711889589651 implements MigrationInterface {
    name = 'Pb1711889589651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_fe6495b9d9163ebcbbefbefc1f" ON "livro" ("ISBN") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_fe6495b9d9163ebcbbefbefc1f"`);
    }

}
