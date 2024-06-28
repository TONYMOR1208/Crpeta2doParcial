import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigrationName1719635949003 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
