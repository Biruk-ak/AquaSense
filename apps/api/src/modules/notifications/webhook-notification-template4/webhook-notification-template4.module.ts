/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WebhookNotificationTemplate4
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookNotificationTemplate4Message } from './entities/webhook-notification-template4-message.entity';
import { WebhookNotificationTemplate4Service } from './services/webhook-notification-template4.service';
import { WebhookNotificationTemplate4Controller } from './controllers/webhook-notification-template4.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WebhookNotificationTemplate4Message])],
  controllers: [WebhookNotificationTemplate4Controller],
  providers: [WebhookNotificationTemplate4Service],
  exports: [WebhookNotificationTemplate4Service],
})
export class WebhookNotificationTemplate4Module {}
