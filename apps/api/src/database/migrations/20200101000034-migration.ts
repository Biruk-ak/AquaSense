/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Migration 34
 * @copyright Biruk-ak
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration3420200101000034 implements MigrationInterface {
  name = 'Migration3420200101000034';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 34 applied`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`-- AquaSense migration 34 reverted`);
  }
}
