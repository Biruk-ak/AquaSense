/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: FireServiceMeterBatch1Reading
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

@Entity('fire_service_meter_batch1_readings')
@Index(['createdAt'])
export class FireServiceMeterBatch1Reading {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  meterSerial: string;

  @Column({ type: 'decimal' })
  readingValue: number;

  @Column({ type: 'varchar' })
  readingUnit: string;

  @Column({ type: 'timestamptz' })
  readAt: Date;

  @Column({ type: 'varchar' })
  qualityFlag?: string;

  @Column({ type: 'boolean' })
  tamperDetected: boolean;

  @Column({ type: 'decimal' })
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
    if (this.meterSerial === undefined || this.meterSerial === null || this.meterSerial === '') {
      errors.push('meterSerial is required');
    }
    if (this.readingValue === undefined || this.readingValue === null || this.readingValue === '') {
      errors.push('readingValue is required');
    }
    if (this.readAt === undefined || this.readAt === null || this.readAt === '') {
      errors.push('readAt is required');
    }
    return errors;
  }
}
