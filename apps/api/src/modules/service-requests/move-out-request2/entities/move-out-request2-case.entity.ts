/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: MoveOutRequest2Case
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

@Entity('move_out_request2_cases')
@Index(['createdAt'])
export class MoveOutRequest2Case {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  accountId: string;

  @Column({ type: 'varchar' })
  subject: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  channel: string;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'timestamptz', nullable: true })
  slaDueAt?: Date;

  @Column({ type: 'decimal' })
  priority: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      accountId: this.accountId,
      subject: this.subject,
      description: this.description,
      channel: this.channel,
      status: this.status,
      slaDueAt: this.slaDueAt,
      priority: this.priority,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.accountId === undefined || this.accountId === null || (typeof this.accountId === 'string' && this.accountId === '')) {
      errors.push('accountId is required');
    }
    if (this.subject === undefined || this.subject === null || (typeof this.subject === 'string' && this.subject === '')) {
      errors.push('subject is required');
    }
    return errors;
  }
}
