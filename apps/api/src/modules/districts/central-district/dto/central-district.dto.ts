/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: CentralDistrict
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

export class CreateCentralDistrictDto {
  @IsString()
  @MaxLength(512)
  code: string;

  @IsString()
  @MaxLength(512)
  displayName: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  populationServed?: number;

  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  boundaryGeoJson?: string;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  pressureZone?: string;
}

export class UpdateCentralDistrictDto {
  @IsOptional()
  code?: string;

  @IsOptional()
  displayName?: string;

  @IsOptional()
  populationServed?: number;

  @IsOptional()
  active?: boolean;

  @IsOptional()
  boundaryGeoJson?: string;

  @IsOptional()
  pressureZone?: string;
}

export class CentralDistrictQueryDto {
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

export class CentralDistrictResponseDto {
  code: string;
  displayName: string;
  populationServed: number;
  active: boolean;
  boundaryGeoJson: string;
  pressureZone: string;
  createdAt: Date;
  updatedAt: Date;
}
