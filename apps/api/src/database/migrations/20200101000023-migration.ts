/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 23
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2320200101000023 implements MigrationInterface {
  name = 'Migration2320200101000023';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 23 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 23 reverted`);
  }
}
