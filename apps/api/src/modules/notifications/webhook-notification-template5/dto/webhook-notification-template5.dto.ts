/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: WebhookNotificationTemplate5
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

export class CreateWebhookNotificationTemplate5Dto {
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

export class UpdateWebhookNotificationTemplate5Dto {
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

export class WebhookNotificationTemplate5QueryDto {
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

export class WebhookNotificationTemplate5ResponseDto {
  templateKey: string;
  subject: string;
  body: string;
  locale: string;
  active: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}
