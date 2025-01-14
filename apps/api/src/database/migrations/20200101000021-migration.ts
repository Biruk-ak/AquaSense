/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 21
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration2120200101000021 implements MigrationInterface {
  name = 'Migration2120200101000021';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 21 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 21 reverted`);
  }
}
