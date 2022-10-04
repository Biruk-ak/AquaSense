/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AccountUpdateRequest1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountUpdateRequest1Case } from './entities/account-update-request1-case.entity';
import { AccountUpdateRequest1Service } from './services/account-update-request1.service';
import { AccountUpdateRequest1Controller } from './controllers/account-update-request1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccountUpdateRequest1Case])],
  controllers: [AccountUpdateRequest1Controller],
  providers: [AccountUpdateRequest1Service],
  exports: [AccountUpdateRequest1Service],
})
export class AccountUpdateRequest1Module {}
