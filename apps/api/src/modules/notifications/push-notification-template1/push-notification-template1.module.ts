/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PushNotificationTemplate1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushNotificationTemplate1Message } from './entities/push-notification-template1-message.entity';
import { PushNotificationTemplate1Service } from './services/push-notification-template1.service';
import { PushNotificationTemplate1Controller } from './controllers/push-notification-template1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PushNotificationTemplate1Message])],
  controllers: [PushNotificationTemplate1Controller],
  providers: [PushNotificationTemplate1Service],
  exports: [PushNotificationTemplate1Service],
})
export class PushNotificationTemplate1Module {}
