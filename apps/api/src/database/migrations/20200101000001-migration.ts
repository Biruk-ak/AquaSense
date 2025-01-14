/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 1
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration120200101000001 implements MigrationInterface {
  name = 'Migration120200101000001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 1 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 1 reverted`);
  }
}
