/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 35
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3520200101000035 implements MigrationInterface {
  name = 'Migration3520200101000035';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 35 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 35 reverted`);
  }
}
