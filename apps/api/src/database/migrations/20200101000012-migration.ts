/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 12
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1220200101000012 implements MigrationInterface {
  name = 'Migration1220200101000012';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 12 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 12 reverted`);
  }
}
