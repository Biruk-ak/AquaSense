/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PushNotificationTemplate5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushNotificationTemplate5Message } from './entities/push-notification-template5-message.entity';
import { PushNotificationTemplate5Service } from './services/push-notification-template5.service';
import { PushNotificationTemplate5Controller } from './controllers/push-notification-template5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PushNotificationTemplate5Message])],
  controllers: [PushNotificationTemplate5Controller],
  providers: [PushNotificationTemplate5Service],
  exports: [PushNotificationTemplate5Service],
})
export class PushNotificationTemplate5Module {}
