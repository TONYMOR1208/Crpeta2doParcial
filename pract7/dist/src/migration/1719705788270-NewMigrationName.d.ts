import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigrationName1719705788270 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
