/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PushNotificationTemplate6
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushNotificationTemplate6Message } from './entities/push-notification-template6-message.entity';
import { PushNotificationTemplate6Service } from './services/push-notification-template6.service';
import { PushNotificationTemplate6Controller } from './controllers/push-notification-template6.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PushNotificationTemplate6Message])],
  controllers: [PushNotificationTemplate6Controller],
  providers: [PushNotificationTemplate6Service],
  exports: [PushNotificationTemplate6Service],
})
export class PushNotificationTemplate6Module {}
