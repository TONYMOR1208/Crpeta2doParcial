import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1719608788456 implements MigrationInterface {
    name = 'InitialSchema1719608788456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "palabra" ("id" SERIAL NOT NULL, "palabra" character varying NOT NULL, "deletreo" character varying NOT NULL, "silabas" integer NOT NULL, "fonetica" character varying NOT NULL, "estado" character varying NOT NULL, "idiomaId" integer, CONSTRAINT "PK_0c390f1d824c5162142a553166f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "registro" ("id" SERIAL NOT NULL, "idiomaId" integer NOT NULL, "palabraId" integer NOT NULL, "deletreo" character varying NOT NULL, "silabas" integer NOT NULL, "fonetica" character varying NOT NULL, "estado" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_68115a72117fce58864e9bf6509" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "idioma" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b539601fc1c09986beb80165ad8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "palabra" ADD CONSTRAINT "FK_27ccde8aa37073462518e6239d9" FOREIGN KEY ("idiomaId") REFERENCES "idioma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registro" ADD CONSTRAINT "FK_1865c48e6203e3d3a0c9b240083" FOREIGN KEY ("idiomaId") REFERENCES "idioma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registro" ADD CONSTRAINT "FK_42235a36c04ca882230d4276420" FOREIGN KEY ("palabraId") REFERENCES "palabra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "registro" DROP CONSTRAINT "FK_42235a36c04ca882230d4276420"`);
        await queryRunner.query(`ALTER TABLE "registro" DROP CONSTRAINT "FK_1865c48e6203e3d3a0c9b240083"`);
        await queryRunner.query(`ALTER TABLE "palabra" DROP CONSTRAINT "FK_27ccde8aa37073462518e6239d9"`);
        await queryRunner.query(`DROP TABLE "idioma"`);
        await queryRunner.query(`DROP TABLE "registro"`);
        await queryRunner.query(`DROP TABLE "palabra"`);
    }

}
