/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InAppNotificationTemplate1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InAppNotificationTemplate1Message } from './entities/in-app-notification-template1-message.entity';
import { InAppNotificationTemplate1Service } from './services/in-app-notification-template1.service';
import { InAppNotificationTemplate1Controller } from './controllers/in-app-notification-template1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InAppNotificationTemplate1Message])],
  controllers: [InAppNotificationTemplate1Controller],
  providers: [InAppNotificationTemplate1Service],
  exports: [InAppNotificationTemplate1Service],
})
export class InAppNotificationTemplate1Module {}
