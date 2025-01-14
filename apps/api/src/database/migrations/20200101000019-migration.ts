/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 19
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1920200101000019 implements MigrationInterface {
  name = 'Migration1920200101000019';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 19 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 19 reverted`);
  }
}
