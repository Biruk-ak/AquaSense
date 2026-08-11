/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Entity: RiversideDistrictProfile
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

@Entity('riverside_district_profiles')
@Index(['createdAt'])
export class RiversideDistrictProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'varchar' })
  displayName: string;

  @Column({ type: 'decimal', nullable: true })
  populationServed?: number;

  @Column({ type: 'boolean' })
  active: boolean;

  @Column({ type: 'varchar', nullable: true })
  boundaryGeoJson?: string;

  @Column({ type: 'varchar', nullable: true })
  pressureZone?: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  toPublicView(): Record<string, unknown> {
    return {
      id: this.id,
      code: this.code,
      displayName: this.displayName,
      populationServed: this.populationServed,
      active: this.active,
      boundaryGeoJson: this.boundaryGeoJson,
      pressureZone: this.pressureZone,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  validateInvariants(): string[] {
    const errors: string[] = [];
    if (this.code === undefined || this.code === null || (typeof this.code === 'string' && this.code === '')) {
      errors.push('code is required');
    }
    if (this.displayName === undefined || this.displayName === null || (typeof this.displayName === 'string' && this.displayName === '')) {
      errors.push('displayName is required');
    }
    return errors;
  }
}
