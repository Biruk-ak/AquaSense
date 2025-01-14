/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 3
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration320200101000003 implements MigrationInterface {
  name = 'Migration320200101000003';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 3 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 3 reverted`);
  }
}
