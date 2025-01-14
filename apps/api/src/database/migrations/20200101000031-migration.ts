/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 31
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3120200101000031 implements MigrationInterface {
  name = 'Migration3120200101000031';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 31 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 31 reverted`);
  }
}
