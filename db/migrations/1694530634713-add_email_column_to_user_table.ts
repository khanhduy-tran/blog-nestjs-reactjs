import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailColumnToUserTable1694530634713 implements MigrationInterface {
    name = 'AddEmailColumnToUserTable1694530634713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
