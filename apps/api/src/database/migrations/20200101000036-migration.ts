/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 36
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3620200101000036 implements MigrationInterface {
  name = 'Migration3620200101000036';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 36 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 36 reverted`);
  }
}
