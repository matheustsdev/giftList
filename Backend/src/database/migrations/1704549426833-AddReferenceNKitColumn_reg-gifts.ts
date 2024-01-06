import { MigrationInterface, QueryRunner } from "typeorm";

export class AddReferenceNKitColumnRegGifts1704549426833 implements MigrationInterface {
    name = 'AddReferenceNKitColumnRegGifts1704549426833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" DROP COLUMN "stripe_id"`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ADD "kit_name" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ADD "reference_url" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" DROP COLUMN "reference_url"`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" DROP COLUMN "kit_name"`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ADD "stripe_id" character varying(255) NOT NULL`);
    }

}
