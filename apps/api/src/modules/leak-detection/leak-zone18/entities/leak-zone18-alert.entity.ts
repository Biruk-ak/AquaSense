/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: LeakZone18Alert
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

@Entity('leak_zone18_alerts')
@Index(['createdAt'])
export class LeakZone18Alert {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  zoneCode: string;

  @Column({ type: 'decimal' })
  severityLitersPerHour: number;

  @Column({ type: 'decimal' })
  confidence: number;

  @Column({ type: 'varchar' })
  severityStatus: string;

  @Column({ type: 'timestamptz' })
  detectedAt: Date;

  @Column({ type: 'timestamptz' })
  resolvedAt?: Date;

  @Column({ type: 'varchar' })
  notes?: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      zoneCode: this.zoneCode,
      severityLitersPerHour: this.severityLitersPerHour,
      confidence: this.confidence,
      severityStatus: this.severityStatus,
      detectedAt: this.detectedAt,
      resolvedAt: this.resolvedAt,
      notes: this.notes,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.zoneCode === undefined || this.zoneCode === null || this.zoneCode === '') {
      errors.push('zoneCode is required');
    }
    if (this.severityLitersPerHour === undefined || this.severityLitersPerHour === null || this.severityLitersPerHour === '') {
      errors.push('severityLitersPerHour is required');
    }
    return errors;
  }
}
