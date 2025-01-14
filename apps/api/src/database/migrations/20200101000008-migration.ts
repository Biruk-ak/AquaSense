/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 8
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration820200101000008 implements MigrationInterface {
  name = 'Migration820200101000008';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 8 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 8 reverted`);
  }
}
