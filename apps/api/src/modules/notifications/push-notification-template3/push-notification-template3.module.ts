/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PushNotificationTemplate3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushNotificationTemplate3Message } from './entities/push-notification-template3-message.entity';
import { PushNotificationTemplate3Service } from './services/push-notification-template3.service';
import { PushNotificationTemplate3Controller } from './controllers/push-notification-template3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PushNotificationTemplate3Message])],
  controllers: [PushNotificationTemplate3Controller],
  providers: [PushNotificationTemplate3Service],
  exports: [PushNotificationTemplate3Service],
})
export class PushNotificationTemplate3Module {}
