/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 5
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration520200101000005 implements MigrationInterface {
  name = 'Migration520200101000005';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 5 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 5 reverted`);
  }
}
