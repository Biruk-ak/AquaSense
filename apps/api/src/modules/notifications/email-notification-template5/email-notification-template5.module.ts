/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmailNotificationTemplate5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailNotificationTemplate5Message } from './entities/email-notification-template5-message.entity';
import { EmailNotificationTemplate5Service } from './services/email-notification-template5.service';
import { EmailNotificationTemplate5Controller } from './controllers/email-notification-template5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmailNotificationTemplate5Message])],
  controllers: [EmailNotificationTemplate5Controller],
  providers: [EmailNotificationTemplate5Service],
  exports: [EmailNotificationTemplate5Service],
})
export class EmailNotificationTemplate5Module {}
