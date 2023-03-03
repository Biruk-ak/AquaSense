/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: EmailNotificationTemplate6
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailNotificationTemplate6Message } from './entities/email-notification-template6-message.entity';
import { EmailNotificationTemplate6Service } from './services/email-notification-template6.service';
import { EmailNotificationTemplate6Controller } from './controllers/email-notification-template6.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmailNotificationTemplate6Message])],
  controllers: [EmailNotificationTemplate6Controller],
  providers: [EmailNotificationTemplate6Service],
  exports: [EmailNotificationTemplate6Service],
})
export class EmailNotificationTemplate6Module {}
