import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableRegGifts1703904332660 implements MigrationInterface {
    name = 'UpdateTableRegGifts1703904332660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ALTER COLUMN "purchasedBy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ALTER COLUMN "purchased_date" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ALTER COLUMN "purchased_date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."reg_gifts" ALTER COLUMN "purchasedBy" SET NOT NULL`);
    }

}
