/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: WebhookNotificationTemplate4Message
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

@Entity('webhook_notification_template4_messages')
@Index(['createdAt'])
export class WebhookNotificationTemplate4Message {
  @PrimaryGeneratedColumn('uuid')
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
    if (this.templateKey === undefined || this.templateKey === null || (typeof this.templateKey === 'string' && this.templateKey === '')) {
      errors.push('templateKey is required');
    }
    return errors;
  }
}
