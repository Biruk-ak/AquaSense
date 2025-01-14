/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 22
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2220200101000022 implements MigrationInterface {
  name = 'Migration2220200101000022';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 22 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 22 reverted`);
  }
}
