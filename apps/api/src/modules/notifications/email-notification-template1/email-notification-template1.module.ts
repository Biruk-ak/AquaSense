/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmailNotificationTemplate1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailNotificationTemplate1Message } from './entities/email-notification-template1-message.entity';
import { EmailNotificationTemplate1Service } from './services/email-notification-template1.service';
import { EmailNotificationTemplate1Controller } from './controllers/email-notification-template1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmailNotificationTemplate1Message])],
  controllers: [EmailNotificationTemplate1Controller],
  providers: [EmailNotificationTemplate1Service],
  exports: [EmailNotificationTemplate1Service],
})
export class EmailNotificationTemplate1Module {}
