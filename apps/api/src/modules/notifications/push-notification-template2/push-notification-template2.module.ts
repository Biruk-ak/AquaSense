/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: PushNotificationTemplate2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PushNotificationTemplate2Message } from './entities/push-notification-template2-message.entity';
import { PushNotificationTemplate2Service } from './services/push-notification-template2.service';
import { PushNotificationTemplate2Controller } from './controllers/push-notification-template2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PushNotificationTemplate2Message])],
  controllers: [PushNotificationTemplate2Controller],
  providers: [PushNotificationTemplate2Service],
  exports: [PushNotificationTemplate2Service],
})
export class PushNotificationTemplate2Module {}
