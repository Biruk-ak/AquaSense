/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: CommercialBillingCycle4Invoice
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

@Entity('commercial_billing_cycle4_invoices')
@Index(['createdAt'])
export class CommercialBillingCycle4Invoice {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'varchar' })
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
    if (this.accountNumber === undefined || this.accountNumber === null || this.accountNumber === '') {
      errors.push('accountNumber is required');
    }
    if (this.periodStart === undefined || this.periodStart === null || this.periodStart === '') {
      errors.push('periodStart is required');
    }
    if (this.periodEnd === undefined || this.periodEnd === null || this.periodEnd === '') {
      errors.push('periodEnd is required');
    }
    return errors;
  }
}
