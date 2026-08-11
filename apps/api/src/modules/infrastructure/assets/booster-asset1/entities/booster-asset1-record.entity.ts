/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: BoosterAsset1Record
 * @copyright Biruk-ak
 */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('booster_asset1_records')
@Index(['createdAt'])
export class BoosterAsset1Record {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  assetTag: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal', nullable: true })
  latitude?: number;

  @Column({ type: 'decimal', nullable: true })
  longitude?: number;

  @Column({ type: 'decimal', nullable: true })
  capacity?: number;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'timestamptz', nullable: true })
  lastInspectedAt?: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      assetTag: this.assetTag,
      name: this.name,
      latitude: this.latitude,
      longitude: this.longitude,
      capacity: this.capacity,
      status: this.status,
      lastInspectedAt: this.lastInspectedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.assetTag === undefined || this.assetTag === null || (typeof this.assetTag === 'string' && this.assetTag === '')) {
      errors.push('assetTag is required');
    }
    if (this.name === undefined || this.name === null || (typeof this.name === 'string' && this.name === '')) {
      errors.push('name is required');
    }
    return errors;
  }
}
