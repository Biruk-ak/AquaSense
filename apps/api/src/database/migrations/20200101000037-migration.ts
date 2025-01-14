/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 37
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3720200101000037 implements MigrationInterface {
  name = 'Migration3720200101000037';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 37 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 37 reverted`);
  }
}
