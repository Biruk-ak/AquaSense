/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 33
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3320200101000033 implements MigrationInterface {
  name = 'Migration3320200101000033';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 33 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 33 reverted`);
  }
}
