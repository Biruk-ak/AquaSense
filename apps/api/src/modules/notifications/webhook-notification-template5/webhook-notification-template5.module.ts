/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WebhookNotificationTemplate5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookNotificationTemplate5Message } from './entities/webhook-notification-template5-message.entity';
import { WebhookNotificationTemplate5Service } from './services/webhook-notification-template5.service';
import { WebhookNotificationTemplate5Controller } from './controllers/webhook-notification-template5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WebhookNotificationTemplate5Message])],
  controllers: [WebhookNotificationTemplate5Controller],
  providers: [WebhookNotificationTemplate5Service],
  exports: [WebhookNotificationTemplate5Service],
})
export class WebhookNotificationTemplate5Module {}
