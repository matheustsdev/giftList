import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableGifts1703802241571 implements MigrationInterface {
    name = 'CreateTableGifts1703802241571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dev"."reg_gifts" ("gift_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "image_src" character varying(255) NOT NULL, "price" integer NOT NULL, "hasPurchased" boolean NOT NULL, "purchasedBy" character varying(255) NOT NULL, "purchased_date" date NOT NULL, CONSTRAINT "PK_822f543351d465e941ad186f43a" PRIMARY KEY ("gift_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dev"."reg_gifts"`);
    }

}
