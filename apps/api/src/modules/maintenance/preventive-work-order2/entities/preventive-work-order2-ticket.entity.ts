/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: PreventiveWorkOrder2Ticket
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

@Entity('preventive_work_order2_tickets')
@Index(['createdAt'])
export class PreventiveWorkOrder2Ticket {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  priority: string;

  @Column({ type: 'varchar' })
  assignedCrew?: string;

  @Column({ type: 'varchar' })
  assetId?: string;

  @Column({ type: 'timestamptz' })
  scheduledAt?: Date;

  @Column({ type: 'timestamptz' })
  completedAt?: Date;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'decimal' })
  estimatedHours?: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      title: this.title,
      priority: this.priority,
      assignedCrew: this.assignedCrew,
      assetId: this.assetId,
      scheduledAt: this.scheduledAt,
      completedAt: this.completedAt,
      status: this.status,
      estimatedHours: this.estimatedHours,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.title === undefined || this.title === null || this.title === '') {
      errors.push('title is required');
    }
    return errors;
  }
}
