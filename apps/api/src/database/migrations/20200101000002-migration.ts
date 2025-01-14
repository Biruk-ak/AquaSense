/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 2
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration220200101000002 implements MigrationInterface {
  name = 'Migration220200101000002';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 2 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 2 reverted`);
  }
}
