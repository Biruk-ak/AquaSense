/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: PumpStationAsset1
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

export class CreatePumpStationAsset1Dto {
  @IsString()
  @MaxLength(512)
  assetTag: string;

  @IsString()
  @MaxLength(512)
  name: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  latitude?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  longitude?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  capacity?: number;

  @IsString()
  @MaxLength(512)
  status: string;

  @IsOptional()
  @IsDateString()
  lastInspectedAt?: Date;
}

export class UpdatePumpStationAsset1Dto {
  @IsOptional()
  assetTag?: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  latitude?: number;

  @IsOptional()
  longitude?: number;

  @IsOptional()
  capacity?: number;

  @IsOptional()
  status?: string;

  @IsOptional()
  lastInspectedAt?: Date;
}

export class PumpStationAsset1QueryDto {
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

export class PumpStationAsset1ResponseDto {
  assetTag: string;
  name: string;
  latitude: number;
  longitude: number;
  capacity: number;
  status: string;
  lastInspectedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
