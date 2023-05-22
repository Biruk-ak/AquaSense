/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: NrwAnalyticsSlice4
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

export class CreateNrwAnalyticsSlice4Dto {
  @IsString()
  @MaxLength(512)
  metricKey: string;

  @IsString()
  @MaxLength(512)
  dimension: string;

  @IsNumber()
  @Min(0)
  value: number;

  @IsDateString()
  capturedAt: Date;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  districtCode?: string;
}

export class UpdateNrwAnalyticsSlice4Dto {
  @IsOptional()
  metricKey?: string;

  @IsOptional()
  dimension?: string;

  @IsOptional()
  value?: number;

  @IsOptional()
  capturedAt?: Date;

  @IsOptional()
  districtCode?: string;
}

export class NrwAnalyticsSlice4QueryDto {
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

export class NrwAnalyticsSlice4ResponseDto {
  metricKey: string;
  dimension: string;
  value: number;
  capturedAt: Date;
  districtCode: string;
  createdAt: Date;
  updatedAt: Date;
}
