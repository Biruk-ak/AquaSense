/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 9
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration920200101000009 implements MigrationInterface {
  name = 'Migration920200101000009';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 9 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 9 reverted`);
  }
}
