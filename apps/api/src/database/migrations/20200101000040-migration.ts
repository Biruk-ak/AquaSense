/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 40
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration4020200101000040 implements MigrationInterface {
  name = 'Migration4020200101000040';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 40 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 40 reverted`);
  }
}
