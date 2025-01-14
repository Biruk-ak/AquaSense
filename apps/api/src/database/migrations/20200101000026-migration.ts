/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 26
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2620200101000026 implements MigrationInterface {
  name = 'Migration2620200101000026';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 26 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 26 reverted`);
  }
}
