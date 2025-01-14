/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 15
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1520200101000015 implements MigrationInterface {
  name = 'Migration1520200101000015';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 15 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 15 reverted`);
  }
}
