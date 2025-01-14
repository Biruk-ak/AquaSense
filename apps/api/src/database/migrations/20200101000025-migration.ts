/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 25
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2520200101000025 implements MigrationInterface {
  name = 'Migration2520200101000025';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 25 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 25 reverted`);
  }
}
