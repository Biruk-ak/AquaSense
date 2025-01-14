/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 6
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration620200101000006 implements MigrationInterface {
  name = 'Migration620200101000006';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 6 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 6 reverted`);
  }
}
