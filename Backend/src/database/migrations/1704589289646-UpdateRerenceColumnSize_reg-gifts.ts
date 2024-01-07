import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRerenceColumnSizeRegGifts1704589289646 implements MigrationInterface {
    name = 'UpdateRerenceColumnSizeRegGifts1704589289646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE ${process.env.DB_SCHEMA}."reg_gifts" DROP COLUMN "reference_url"`);
        await queryRunner.query(`ALTER TABLE ${process.env.DB_SCHEMA}."reg_gifts" ADD "reference_url" character varying(1000)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE ${process.env.DB_SCHEMA}."reg_gifts" DROP COLUMN "reference_url"`);
        await queryRunner.query(`ALTER TABLE ${process.env.DB_SCHEMA}."reg_gifts" ADD "reference_url" character varying(255)`);
    }

}
