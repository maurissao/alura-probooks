import { MigrationInterface, QueryRunner } from "typeorm";

export class Pb1712056091840 implements MigrationInterface {
    name = 'Pb1712056091840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "endereco_usuario" ("usuarioId" uuid NOT NULL, "pais" character varying NOT NULL, "estado" character varying NOT NULL, "cidade" character varying NOT NULL, "bairro" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "cep" character varying NOT NULL, CONSTRAINT "PK_0d358631b4e846df8f87a7af820" PRIMARY KEY ("usuarioId"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "telefone" character varying NOT NULL, "data_cadastro" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "autor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "email" character varying(320) NOT NULL, "biografia" character varying(100) NOT NULL, "data_cadastro" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_51d3959df48c82010ae1c4907fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "descricao" character varying(100) NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "livro" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "resumo" character varying(500) NOT NULL, "sumario" character varying(100) NOT NULL, "preco" integer NOT NULL, "paginas" integer NOT NULL, "ISBN" character varying(20) NOT NULL, "data_publicacao" TIMESTAMP NOT NULL, "categoriaId" uuid, "autorId" uuid, CONSTRAINT "PK_5601163ea69da49108c4f7854cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_fe6495b9d9163ebcbbefbefc1f" ON "livro" ("ISBN") `);
        await queryRunner.query(`CREATE TABLE "compra" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "forma_pagamento" character varying NOT NULL, "parcelas" integer NOT NULL, "valor_parcela" double precision NOT NULL, "data_compra" TIMESTAMP NOT NULL DEFAULT now(), "total" double precision NOT NULL, "usuarioId" uuid, CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item_compra" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantidade" integer NOT NULL, "preco" integer NOT NULL, "compraId" uuid, "livroId" uuid, CONSTRAINT "PK_851dbb494f5fed503eef1b062a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "endereco_usuario" ADD CONSTRAINT "FK_0d358631b4e846df8f87a7af820" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "livro" ADD CONSTRAINT "FK_71d8ca8f12af61304dee8ed22dc" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "livro" ADD CONSTRAINT "FK_d591802ea54b1c8a09abeb80cec" FOREIGN KEY ("autorId") REFERENCES "autor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "FK_0cefc0d62dcd4bf217a5574d31f" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item_compra" ADD CONSTRAINT "FK_60774a2b6209247e08e9eb3a778" FOREIGN KEY ("compraId") REFERENCES "compra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item_compra" ADD CONSTRAINT "FK_4c7dbe380f56c0a1377ef3d73ca" FOREIGN KEY ("livroId") REFERENCES "livro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_compra" DROP CONSTRAINT "FK_4c7dbe380f56c0a1377ef3d73ca"`);
        await queryRunner.query(`ALTER TABLE "item_compra" DROP CONSTRAINT "FK_60774a2b6209247e08e9eb3a778"`);
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "FK_0cefc0d62dcd4bf217a5574d31f"`);
        await queryRunner.query(`ALTER TABLE "livro" DROP CONSTRAINT "FK_d591802ea54b1c8a09abeb80cec"`);
        await queryRunner.query(`ALTER TABLE "livro" DROP CONSTRAINT "FK_71d8ca8f12af61304dee8ed22dc"`);
        await queryRunner.query(`ALTER TABLE "endereco_usuario" DROP CONSTRAINT "FK_0d358631b4e846df8f87a7af820"`);
        await queryRunner.query(`DROP TABLE "item_compra"`);
        await queryRunner.query(`DROP TABLE "compra"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fe6495b9d9163ebcbbefbefc1f"`);
        await queryRunner.query(`DROP TABLE "livro"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "autor"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "endereco_usuario"`);
    }

}
