/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 32
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3220200101000032 implements MigrationInterface {
  name = 'Migration3220200101000032';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 32 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 32 reverted`);
  }
}
