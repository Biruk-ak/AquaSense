/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: SubmeterMeterBatch3
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

export class CreateSubmeterMeterBatch3Dto {
  @IsString()
  @MaxLength(512)
  meterSerial: string;

  @IsNumber()
  @Min(0)
  readingValue: number;

  @IsString()
  @MaxLength(512)
  readingUnit: string;

  @IsDateString()
  readAt: Date;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  qualityFlag?: string;

  @IsBoolean()
  tamperDetected: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  signalStrength?: number;
}

export class UpdateSubmeterMeterBatch3Dto {
  @IsOptional()
  meterSerial?: string;

  @IsOptional()
  readingValue?: number;

  @IsOptional()
  readingUnit?: string;

  @IsOptional()
  readAt?: Date;

  @IsOptional()
  qualityFlag?: string;

  @IsOptional()
  tamperDetected?: boolean;

  @IsOptional()
  signalStrength?: number;
}

export class SubmeterMeterBatch3QueryDto {
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

export class SubmeterMeterBatch3ResponseDto {
  meterSerial: string;
  readingValue: number;
  readingUnit: string;
  readAt: Date;
  qualityFlag: string;
  tamperDetected: boolean;
  signalStrength: number;
  createdAt: Date;
  updatedAt: Date;
}
