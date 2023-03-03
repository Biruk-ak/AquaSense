/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: InAppNotificationTemplate1Message
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

@Entity('in_app_notification_template1_messages')
@Index(['createdAt'])
export class InAppNotificationTemplate1Message {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  templateKey: string;

  @Column({ type: 'varchar' })
  subject: string;

  @Column({ type: 'varchar' })
  body: string;

  @Column({ type: 'varchar' })
  locale: string;

  @Column({ type: 'boolean' })
  active: boolean;

  @Column({ type: 'decimal' })
  priority: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      templateKey: this.templateKey,
      subject: this.subject,
      body: this.body,
      locale: this.locale,
      active: this.active,
      priority: this.priority,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.templateKey === undefined || this.templateKey === null || this.templateKey === '') {
      errors.push('templateKey is required');
    }
    return errors;
  }
}
