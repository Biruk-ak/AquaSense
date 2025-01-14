/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 17
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1720200101000017 implements MigrationInterface {
  name = 'Migration1720200101000017';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 17 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 17 reverted`);
  }
}
