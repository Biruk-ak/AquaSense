/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InAppNotificationTemplate3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InAppNotificationTemplate3Message } from './entities/in-app-notification-template3-message.entity';
import { InAppNotificationTemplate3Service } from './services/in-app-notification-template3.service';
import { InAppNotificationTemplate3Controller } from './controllers/in-app-notification-template3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InAppNotificationTemplate3Message])],
  controllers: [InAppNotificationTemplate3Controller],
  providers: [InAppNotificationTemplate3Service],
  exports: [InAppNotificationTemplate3Service],
})
export class InAppNotificationTemplate3Module {}
