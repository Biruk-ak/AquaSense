/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 28
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2820200101000028 implements MigrationInterface {
  name = 'Migration2820200101000028';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 28 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 28 reverted`);
  }
}
