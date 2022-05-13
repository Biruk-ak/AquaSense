/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: AgriculturalBillingCycle3
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

export class CreateAgriculturalBillingCycle3Dto {
  @IsString()
  @MaxLength(512)
  accountNumber: string;

  @IsDateString()
  periodStart: Date;

  @IsDateString()
  periodEnd: Date;

  @IsNumber()
  @Min(0)
  consumptionM3: number;

  @IsNumber()
  @Min(0)
  amountDue: number;

  @IsNumber()
  @Min(0)
  amountPaid: number;

  @IsString()
  @MaxLength(512)
  status: string;

  @IsDateString()
  dueDate: Date;
}

export class UpdateAgriculturalBillingCycle3Dto {
  @IsOptional()
  accountNumber?: string;

  @IsOptional()
  periodStart?: Date;

  @IsOptional()
  periodEnd?: Date;

  @IsOptional()
  consumptionM3?: number;

  @IsOptional()
  amountDue?: number;

  @IsOptional()
  amountPaid?: number;

  @IsOptional()
  status?: string;

  @IsOptional()
  dueDate?: Date;
}

export class AgriculturalBillingCycle3QueryDto {
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

export class AgriculturalBillingCycle3ResponseDto {
  accountNumber: string;
  periodStart: Date;
  periodEnd: Date;
  consumptionM3: number;
  amountDue: number;
  amountPaid: number;
  status: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
