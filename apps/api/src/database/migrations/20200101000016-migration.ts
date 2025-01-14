/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 16
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1620200101000016 implements MigrationInterface {
  name = 'Migration1620200101000016';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 16 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 16 reverted`);
  }
}
