/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: UserAccount
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

@Entity('user_accounts')
@Index(['createdAt'])
export class UserAccount {
  @PrimaryGeneratedColumn('uuid')
  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  displayName: string;

  @Column({ type: 'varchar' })
  passwordHash: string;

  @Column({ type: 'varchar' })
  roles: string;

  @Column({ type: 'boolean' })
  active: boolean;

  @Column({ type: 'timestamptz' })
  lastLoginAt?: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      email: this.email,
      displayName: this.displayName,
      roles: this.roles,
      active: this.active,
      lastLoginAt: this.lastLoginAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.email === undefined || this.email === null || this.email === '') {
      errors.push('email is required');
    }
    if (this.displayName === undefined || this.displayName === null || this.displayName === '') {
      errors.push('displayName is required');
    }
    if (this.passwordHash === undefined || this.passwordHash === null || this.passwordHash === '') {
      errors.push('passwordHash is required');
    }
    return errors;
  }
}
