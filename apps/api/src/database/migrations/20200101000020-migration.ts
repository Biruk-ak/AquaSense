/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 20
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2020200101000020 implements MigrationInterface {
  name = 'Migration2020200101000020';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 20 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 20 reverted`);
  }
}
