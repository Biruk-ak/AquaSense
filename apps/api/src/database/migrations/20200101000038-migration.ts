/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 38
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3820200101000038 implements MigrationInterface {
  name = 'Migration3820200101000038';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 38 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 38 reverted`);
  }
}
