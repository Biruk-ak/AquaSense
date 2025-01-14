/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 30
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3020200101000030 implements MigrationInterface {
  name = 'Migration3020200101000030';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 30 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 30 reverted`);
  }
}
