/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 11
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1120200101000011 implements MigrationInterface {
  name = 'Migration1120200101000011';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 11 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 11 reverted`);
  }
}
