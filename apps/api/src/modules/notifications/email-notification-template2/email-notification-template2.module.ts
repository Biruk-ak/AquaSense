/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmailNotificationTemplate2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailNotificationTemplate2Message } from './entities/email-notification-template2-message.entity';
import { EmailNotificationTemplate2Service } from './services/email-notification-template2.service';
import { EmailNotificationTemplate2Controller } from './controllers/email-notification-template2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmailNotificationTemplate2Message])],
  controllers: [EmailNotificationTemplate2Controller],
  providers: [EmailNotificationTemplate2Service],
  exports: [EmailNotificationTemplate2Service],
})
export class EmailNotificationTemplate2Module {}
