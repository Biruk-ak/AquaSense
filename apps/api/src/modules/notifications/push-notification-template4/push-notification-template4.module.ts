/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PushNotificationTemplate4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushNotificationTemplate4Message } from './entities/push-notification-template4-message.entity';
import { PushNotificationTemplate4Service } from './services/push-notification-template4.service';
import { PushNotificationTemplate4Controller } from './controllers/push-notification-template4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PushNotificationTemplate4Message])],
  controllers: [PushNotificationTemplate4Controller],
  providers: [PushNotificationTemplate4Service],
  exports: [PushNotificationTemplate4Service],
})
export class PushNotificationTemplate4Module {}
