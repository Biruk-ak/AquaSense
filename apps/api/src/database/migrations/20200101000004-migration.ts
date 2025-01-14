/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 4
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration420200101000004 implements MigrationInterface {
  name = 'Migration420200101000004';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 4 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 4 reverted`);
  }
}
