/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: SmsNotificationTemplate2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsNotificationTemplate2Message } from './entities/sms-notification-template2-message.entity';
import { SmsNotificationTemplate2Service } from './services/sms-notification-template2.service';
import { SmsNotificationTemplate2Controller } from './controllers/sms-notification-template2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SmsNotificationTemplate2Message])],
  controllers: [SmsNotificationTemplate2Controller],
  providers: [SmsNotificationTemplate2Service],
  exports: [SmsNotificationTemplate2Service],
})
export class SmsNotificationTemplate2Module {}
