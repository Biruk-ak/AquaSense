/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: WellAsset2Record
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

@Entity('well_asset2_records')
@Index(['createdAt'])
export class WellAsset2Record {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  assetTag: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal' })
  latitude?: number;

  @Column({ type: 'decimal' })
  longitude?: number;

  @Column({ type: 'decimal' })
  capacity?: number;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'timestamptz' })
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
    if (this.assetTag === undefined || this.assetTag === null || this.assetTag === '') {
      errors.push('assetTag is required');
    }
    if (this.name === undefined || this.name === null || this.name === '') {
      errors.push('name is required');
    }
    return errors;
  }
}
