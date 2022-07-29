/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: InspectionWorkOrder1
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

export class CreateInspectionWorkOrder1Dto {
  @IsString()
  @MaxLength(512)
  title: string;

  @IsString()
  @MaxLength(512)
  priority: string;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  assignedCrew?: string;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  assetId?: string;

  @IsOptional()
  @IsDateString()
  scheduledAt?: Date;

  @IsOptional()
  @IsDateString()
  completedAt?: Date;

  @IsString()
  @MaxLength(512)
  status: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  estimatedHours?: number;
}

export class UpdateInspectionWorkOrder1Dto {
  @IsOptional()
  title?: string;

  @IsOptional()
  priority?: string;

  @IsOptional()
  assignedCrew?: string;

  @IsOptional()
  assetId?: string;

  @IsOptional()
  scheduledAt?: Date;

  @IsOptional()
  completedAt?: Date;

  @IsOptional()
  status?: string;

  @IsOptional()
  estimatedHours?: number;
}

export class InspectionWorkOrder1QueryDto {
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

export class InspectionWorkOrder1ResponseDto {
  title: string;
  priority: string;
  assignedCrew: string;
  assetId: string;
  scheduledAt: Date;
  completedAt: Date;
  status: string;
  estimatedHours: number;
  createdAt: Date;
  updatedAt: Date;
}
