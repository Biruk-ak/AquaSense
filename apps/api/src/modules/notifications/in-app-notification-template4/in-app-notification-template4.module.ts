/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InAppNotificationTemplate4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InAppNotificationTemplate4Message } from './entities/in-app-notification-template4-message.entity';
import { InAppNotificationTemplate4Service } from './services/in-app-notification-template4.service';
import { InAppNotificationTemplate4Controller } from './controllers/in-app-notification-template4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InAppNotificationTemplate4Message])],
  controllers: [InAppNotificationTemplate4Controller],
  providers: [InAppNotificationTemplate4Service],
  exports: [InAppNotificationTemplate4Service],
})
export class InAppNotificationTemplate4Module {}
