/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SmsNotificationTemplate6
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsNotificationTemplate6Message } from './entities/sms-notification-template6-message.entity';
import { SmsNotificationTemplate6Service } from './services/sms-notification-template6.service';
import { SmsNotificationTemplate6Controller } from './controllers/sms-notification-template6.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SmsNotificationTemplate6Message])],
  controllers: [SmsNotificationTemplate6Controller],
  providers: [SmsNotificationTemplate6Service],
  exports: [SmsNotificationTemplate6Service],
})
export class SmsNotificationTemplate6Module {}
