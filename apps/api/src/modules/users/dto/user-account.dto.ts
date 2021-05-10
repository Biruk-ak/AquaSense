/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * DTO: UserAccount
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

export class CreateUserAccountDto {
  @IsString()
  @MaxLength(512)
  email: string;

  @IsString()
  @MaxLength(512)
  displayName: string;

  @IsString()
  @MaxLength(512)
  passwordHash: string;

  @IsString()
  @MaxLength(512)
  roles: string;

  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsDateString()
  lastLoginAt?: Date;
}

export class UpdateUserAccountDto {
  @IsOptional()
  email?: string;

  @IsOptional()
  displayName?: string;

  @IsOptional()
  passwordHash?: string;

  @IsOptional()
  roles?: string;

  @IsOptional()
  active?: boolean;

  @IsOptional()
  lastLoginAt?: Date;
}

export class UserAccountQueryDto {
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

export class UserAccountResponseDto {
  email: string;
  displayName: string;
  passwordHash: string;
  roles: string;
  active: boolean;
  lastLoginAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
