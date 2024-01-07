import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveUselessColumnsRegGifts1704587379739 implements MigrationInterface {
    name = 'RemoveUselessColumnsRegGifts1704587379739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" DROP COLUMN "purchasedBy"`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" DROP COLUMN "kit_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ADD "kit_name" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ADD "purchasedBy" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ADD "description" character varying(255) NOT NULL`);
    }

}
