/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmailNotificationTemplate3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailNotificationTemplate3Message } from './entities/email-notification-template3-message.entity';
import { EmailNotificationTemplate3Service } from './services/email-notification-template3.service';
import { EmailNotificationTemplate3Controller } from './controllers/email-notification-template3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmailNotificationTemplate3Message])],
  controllers: [EmailNotificationTemplate3Controller],
  providers: [EmailNotificationTemplate3Service],
  exports: [EmailNotificationTemplate3Service],
})
export class EmailNotificationTemplate3Module {}
