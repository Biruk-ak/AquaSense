/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SmsNotificationTemplate1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsNotificationTemplate1Message } from './entities/sms-notification-template1-message.entity';
import { SmsNotificationTemplate1Service } from './services/sms-notification-template1.service';
import { SmsNotificationTemplate1Controller } from './controllers/sms-notification-template1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SmsNotificationTemplate1Message])],
  controllers: [SmsNotificationTemplate1Controller],
  providers: [SmsNotificationTemplate1Service],
  exports: [SmsNotificationTemplate1Service],
})
export class SmsNotificationTemplate1Module {}
