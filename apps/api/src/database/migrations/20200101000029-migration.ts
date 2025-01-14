/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 29
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2920200101000029 implements MigrationInterface {
  name = 'Migration2920200101000029';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 29 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 29 reverted`);
  }
}
