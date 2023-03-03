/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SmsNotificationTemplate4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsNotificationTemplate4Message } from './entities/sms-notification-template4-message.entity';
import { SmsNotificationTemplate4Service } from './services/sms-notification-template4.service';
import { SmsNotificationTemplate4Controller } from './controllers/sms-notification-template4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SmsNotificationTemplate4Message])],
  controllers: [SmsNotificationTemplate4Controller],
  providers: [SmsNotificationTemplate4Service],
  exports: [SmsNotificationTemplate4Service],
})
export class SmsNotificationTemplate4Module {}
