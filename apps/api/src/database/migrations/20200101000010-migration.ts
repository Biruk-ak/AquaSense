/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 10
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1020200101000010 implements MigrationInterface {
  name = 'Migration1020200101000010';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 10 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 10 reverted`);
  }
}
