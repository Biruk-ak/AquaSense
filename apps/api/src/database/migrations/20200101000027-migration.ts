/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 27
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2720200101000027 implements MigrationInterface {
  name = 'Migration2720200101000027';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 27 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 27 reverted`);
  }
}
