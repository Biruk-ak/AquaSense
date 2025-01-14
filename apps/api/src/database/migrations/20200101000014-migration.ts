/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 14
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1420200101000014 implements MigrationInterface {
  name = 'Migration1420200101000014';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 14 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 14 reverted`);
  }
}
