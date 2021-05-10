/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: UserAccount
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccount } from './entities/user-account.entity';
import { UserAccountService } from './services/user-account.service';
import { UserAccountController } from './controllers/user-account.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccount])],
  controllers: [UserAccountController],
  providers: [UserAccountService],
  exports: [UserAccountService],
})
export class UserAccountModule {}
