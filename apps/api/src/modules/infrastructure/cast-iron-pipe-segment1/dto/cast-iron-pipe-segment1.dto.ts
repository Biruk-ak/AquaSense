/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: CastIronPipeSegment1
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

export class CreateCastIronPipeSegment1Dto {
  @IsString()
  @MaxLength(512)
  segmentCode: string;

  @IsNumber()
  @Min(0)
  diameterMm: number;

  @IsNumber()
  @Min(0)
  lengthM: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  installYear?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  conditionScore?: number;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  geometryWkt?: string;

  @IsString()
  @MaxLength(512)
  status: string;
}

export class UpdateCastIronPipeSegment1Dto {
  @IsOptional()
  segmentCode?: string;

  @IsOptional()
  diameterMm?: number;

  @IsOptional()
  lengthM?: number;

  @IsOptional()
  installYear?: number;

  @IsOptional()
  conditionScore?: number;

  @IsOptional()
  geometryWkt?: string;

  @IsOptional()
  status?: string;
}

export class CastIronPipeSegment1QueryDto {
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

export class CastIronPipeSegment1ResponseDto {
  segmentCode: string;
  diameterMm: number;
  lengthM: number;
  installYear: number;
  conditionScore: number;
  geometryWkt: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
