/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * TypeORM data source
 * @copyright Biruk-ak
 */

import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT || 5432),
  username: process.env.DATABASE_USER || 'aquasense',
  password: process.env.DATABASE_PASSWORD || 'aquasense_dev',
  database: process.env.DATABASE_NAME || 'aquasense',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/apps/api/src/database/migrations/*.js'],
  synchronize: false,
});
