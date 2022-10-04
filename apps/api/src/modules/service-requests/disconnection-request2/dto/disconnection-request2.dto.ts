/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: DisconnectionRequest2
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

export class CreateDisconnectionRequest2Dto {
  @IsString()
  @MaxLength(512)
  accountId: string;

  @IsString()
  @MaxLength(512)
  subject: string;

  @IsString()
  @MaxLength(512)
  description: string;

  @IsString()
  @MaxLength(512)
  channel: string;

  @IsString()
  @MaxLength(512)
  status: string;

  @IsOptional()
  @IsDateString()
  slaDueAt?: Date;

  @IsNumber()
  @Min(0)
  priority: number;
}

export class UpdateDisconnectionRequest2Dto {
  @IsOptional()
  accountId?: string;

  @IsOptional()
  subject?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  channel?: string;

  @IsOptional()
  status?: string;

  @IsOptional()
  slaDueAt?: Date;

  @IsOptional()
  priority?: number;
}

export class DisconnectionRequest2QueryDto {
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

export class DisconnectionRequest2ResponseDto {
  accountId: string;
  subject: string;
  description: string;
  channel: string;
  status: string;
  slaDueAt: Date;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}
