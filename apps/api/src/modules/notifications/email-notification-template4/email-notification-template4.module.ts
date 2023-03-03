/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmailNotificationTemplate4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailNotificationTemplate4Message } from './entities/email-notification-template4-message.entity';
import { EmailNotificationTemplate4Service } from './services/email-notification-template4.service';
import { EmailNotificationTemplate4Controller } from './controllers/email-notification-template4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmailNotificationTemplate4Message])],
  controllers: [EmailNotificationTemplate4Controller],
  providers: [EmailNotificationTemplate4Service],
  exports: [EmailNotificationTemplate4Service],
})
export class EmailNotificationTemplate4Module {}
