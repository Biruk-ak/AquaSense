/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: AccountUpdateRequest2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountUpdateRequest2Case } from './entities/account-update-request2-case.entity';
import { AccountUpdateRequest2Service } from './services/account-update-request2.service';
import { AccountUpdateRequest2Controller } from './controllers/account-update-request2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccountUpdateRequest2Case])],
  controllers: [AccountUpdateRequest2Controller],
  providers: [AccountUpdateRequest2Service],
  exports: [AccountUpdateRequest2Service],
})
export class AccountUpdateRequest2Module {}
