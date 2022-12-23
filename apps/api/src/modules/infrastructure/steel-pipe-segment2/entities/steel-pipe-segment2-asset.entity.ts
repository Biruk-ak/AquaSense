/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: SteelPipeSegment2Asset
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

@Entity('steel_pipe_segment2_assets')
@Index(['createdAt'])
export class SteelPipeSegment2Asset {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  segmentCode: string;

  @Column({ type: 'decimal' })
  diameterMm: number;

  @Column({ type: 'decimal' })
  lengthM: number;

  @Column({ type: 'decimal' })
  installYear?: number;

  @Column({ type: 'decimal' })
  conditionScore?: number;

  @Column({ type: 'varchar' })
  geometryWkt?: string;

  @Column({ type: 'varchar' })
  status: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      segmentCode: this.segmentCode,
      diameterMm: this.diameterMm,
      lengthM: this.lengthM,
      installYear: this.installYear,
      conditionScore: this.conditionScore,
      geometryWkt: this.geometryWkt,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.segmentCode === undefined || this.segmentCode === null || this.segmentCode === '') {
      errors.push('segmentCode is required');
    }
    return errors;
  }
}
