/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SmsNotificationTemplate5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsNotificationTemplate5Message } from './entities/sms-notification-template5-message.entity';
import { SmsNotificationTemplate5Service } from './services/sms-notification-template5.service';
import { SmsNotificationTemplate5Controller } from './controllers/sms-notification-template5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SmsNotificationTemplate5Message])],
  controllers: [SmsNotificationTemplate5Controller],
  providers: [SmsNotificationTemplate5Service],
  exports: [SmsNotificationTemplate5Service],
})
export class SmsNotificationTemplate5Module {}
