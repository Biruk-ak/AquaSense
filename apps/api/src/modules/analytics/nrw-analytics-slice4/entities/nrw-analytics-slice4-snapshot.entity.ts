/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: NrwAnalyticsSlice4Snapshot
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

@Entity('nrw_analytics_slice4_snapshots')
@Index(['createdAt'])
export class NrwAnalyticsSlice4Snapshot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  metricKey: string;

  @Column({ type: 'varchar' })
  dimension: string;

  @Column({ type: 'decimal' })
  value: number;

  @Column({ type: 'timestamptz' })
  capturedAt: Date;

  @Column({ type: 'varchar', nullable: true })
  districtCode?: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      metricKey: this.metricKey,
      dimension: this.dimension,
      value: this.value,
      capturedAt: this.capturedAt,
      districtCode: this.districtCode,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.metricKey === undefined || this.metricKey === null || (typeof this.metricKey === 'string' && this.metricKey === '')) {
      errors.push('metricKey is required');
    }
    return errors;
  }
}
