/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 7
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration720200101000007 implements MigrationInterface {
  name = 'Migration720200101000007';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 7 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 7 reverted`);
  }
}
