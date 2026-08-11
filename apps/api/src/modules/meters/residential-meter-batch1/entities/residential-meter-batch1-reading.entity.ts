/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: ResidentialMeterBatch1Reading
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

@Entity('residential_meter_batch1_readings')
@Index(['createdAt'])
export class ResidentialMeterBatch1Reading {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  meterSerial: string;

  @Column({ type: 'decimal' })
  readingValue: number;

  @Column({ type: 'varchar' })
  readingUnit: string;

  @Column({ type: 'timestamptz' })
  readAt: Date;

  @Column({ type: 'varchar', nullable: true })
  qualityFlag?: string;

  @Column({ type: 'boolean' })
  tamperDetected: boolean;

  @Column({ type: 'decimal', nullable: true })
  signalStrength?: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      meterSerial: this.meterSerial,
      readingValue: this.readingValue,
      readingUnit: this.readingUnit,
      readAt: this.readAt,
      qualityFlag: this.qualityFlag,
      tamperDetected: this.tamperDetected,
      signalStrength: this.signalStrength,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.meterSerial === undefined || this.meterSerial === null || (typeof this.meterSerial === 'string' && this.meterSerial === '')) {
      errors.push('meterSerial is required');
    }
    if (this.readingValue === undefined || this.readingValue === null || (typeof this.readingValue === 'string' && this.readingValue === '')) {
      errors.push('readingValue is required');
    }
    if (this.readAt === undefined || this.readAt === null || (typeof this.readAt === 'string' && this.readAt === '')) {
      errors.push('readAt is required');
    }
    return errors;
  }
}
