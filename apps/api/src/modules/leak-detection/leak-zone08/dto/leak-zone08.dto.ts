/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: LeakZone08
 * @copyright Biruk-ak
 */

import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsDateString,
  MaxLength,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLeakZone08Dto {
  @IsString()
  @MaxLength(512)
  zoneCode: string;

  @IsNumber()
  @Min(0)
  severityLitersPerHour: number;

  @IsNumber()
  @Min(0)
  confidence: number;

  @IsString()
  @MaxLength(512)
  severityStatus: string;

  @IsDateString()
  detectedAt: Date;

  @IsOptional()
  @IsDateString()
  resolvedAt?: Date;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  notes?: string;
}

export class UpdateLeakZone08Dto {
  @IsOptional()
  zoneCode?: string;

  @IsOptional()
  severityLitersPerHour?: number;

  @IsOptional()
  confidence?: number;

  @IsOptional()
  severityStatus?: string;

  @IsOptional()
  detectedAt?: Date;

  @IsOptional()
  resolvedAt?: Date;

  @IsOptional()
  notes?: string;
}

export class LeakZone08QueryDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit?: number = 25;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  sortBy?: string;

  @IsOptional()
  @IsString()
  sortOrder?: 'ASC' | 'DESC';
}

export class LeakZone08ResponseDto {
  zoneCode: string;
  severityLitersPerHour: number;
  confidence: number;
  severityStatus: string;
  detectedAt: Date;
  resolvedAt: Date;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}
