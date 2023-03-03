/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: InAppNotificationTemplate6
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

export class CreateInAppNotificationTemplate6Dto {
  @IsString()
  @MaxLength(512)
  templateKey: string;

  @IsString()
  @MaxLength(512)
  subject: string;

  @IsString()
  @MaxLength(512)
  body: string;

  @IsString()
  @MaxLength(512)
  locale: string;

  @IsBoolean()
  active: boolean;

  @IsNumber()
  @Min(0)
  priority: number;
}

export class UpdateInAppNotificationTemplate6Dto {
  @IsOptional()
  templateKey?: string;

  @IsOptional()
  subject?: string;

  @IsOptional()
  body?: string;

  @IsOptional()
  locale?: string;

  @IsOptional()
  active?: boolean;

  @IsOptional()
  priority?: number;
}

export class InAppNotificationTemplate6QueryDto {
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

export class InAppNotificationTemplate6ResponseDto {
  templateKey: string;
  subject: string;
  body: string;
  locale: string;
  active: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}
