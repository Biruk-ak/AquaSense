/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 24
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2420200101000024 implements MigrationInterface {
  name = 'Migration2420200101000024';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 24 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 24 reverted`);
  }
}
