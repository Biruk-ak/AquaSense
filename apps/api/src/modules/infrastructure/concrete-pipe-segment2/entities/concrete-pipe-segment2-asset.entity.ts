/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: ConcretePipeSegment2Asset
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

@Entity('concrete_pipe_segment2_assets')
@Index(['createdAt'])
export class ConcretePipeSegment2Asset {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  segmentCode: string;

  @Column({ type: 'decimal' })
  diameterMm: number;

  @Column({ type: 'decimal' })
  lengthM: number;

  @Column({ type: 'decimal', nullable: true })
  installYear?: number;

  @Column({ type: 'decimal', nullable: true })
  conditionScore?: number;

  @Column({ type: 'varchar', nullable: true })
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
    if (this.segmentCode === undefined || this.segmentCode === null || (typeof this.segmentCode === 'string' && this.segmentCode === '')) {
      errors.push('segmentCode is required');
    }
    return errors;
  }
}
