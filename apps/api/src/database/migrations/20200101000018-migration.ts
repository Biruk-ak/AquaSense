/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 18
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1820200101000018 implements MigrationInterface {
  name = 'Migration1820200101000018';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 18 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 18 reverted`);
  }
}
