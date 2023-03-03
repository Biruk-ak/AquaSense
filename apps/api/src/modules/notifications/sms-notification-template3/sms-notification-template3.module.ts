/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SmsNotificationTemplate3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsNotificationTemplate3Message } from './entities/sms-notification-template3-message.entity';
import { SmsNotificationTemplate3Service } from './services/sms-notification-template3.service';
import { SmsNotificationTemplate3Controller } from './controllers/sms-notification-template3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SmsNotificationTemplate3Message])],
  controllers: [SmsNotificationTemplate3Controller],
  providers: [SmsNotificationTemplate3Service],
  exports: [SmsNotificationTemplate3Service],
})
export class SmsNotificationTemplate3Module {}
