/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 39
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3920200101000039 implements MigrationInterface {
  name = 'Migration3920200101000039';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 39 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 39 reverted`);
  }
}
