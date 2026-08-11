/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: AgriculturalBillingCycle5Invoice
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

@Entity('agricultural_billing_cycle5_invoices')
@Index(['createdAt'])
export class AgriculturalBillingCycle5Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  accountNumber: string;

  @Column({ type: 'timestamptz' })
  periodStart: Date;

  @Column({ type: 'timestamptz' })
  periodEnd: Date;

  @Column({ type: 'decimal' })
  consumptionM3: number;

  @Column({ type: 'decimal' })
  amountDue: number;

  @Column({ type: 'decimal' })
  amountPaid: number;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'timestamptz' })
  dueDate: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      accountNumber: this.accountNumber,
      periodStart: this.periodStart,
      periodEnd: this.periodEnd,
      consumptionM3: this.consumptionM3,
      amountDue: this.amountDue,
      amountPaid: this.amountPaid,
      status: this.status,
      dueDate: this.dueDate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.accountNumber === undefined || this.accountNumber === null || (typeof this.accountNumber === 'string' && this.accountNumber === '')) {
      errors.push('accountNumber is required');
    }
    if (this.periodStart === undefined || this.periodStart === null || (typeof this.periodStart === 'string' && this.periodStart === '')) {
      errors.push('periodStart is required');
    }
    if (this.periodEnd === undefined || this.periodEnd === null || (typeof this.periodEnd === 'string' && this.periodEnd === '')) {
      errors.push('periodEnd is required');
    }
    return errors;
  }
}
