/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 13
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1320200101000013 implements MigrationInterface {
  name = 'Migration1320200101000013';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 13 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 13 reverted`);
  }
}
