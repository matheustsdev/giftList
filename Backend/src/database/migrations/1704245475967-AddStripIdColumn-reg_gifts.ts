import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStripIdColumnRegGifts1704245475967 implements MigrationInterface {
    name = 'AddStripIdColumnRegGifts1704245475967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ADD "stripe_id" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" DROP COLUMN "stripe_id"`);
    }

}
