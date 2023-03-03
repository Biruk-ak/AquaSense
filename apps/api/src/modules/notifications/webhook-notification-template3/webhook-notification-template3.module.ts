/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WebhookNotificationTemplate3
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookNotificationTemplate3Message } from './entities/webhook-notification-template3-message.entity';
import { WebhookNotificationTemplate3Service } from './services/webhook-notification-template3.service';
import { WebhookNotificationTemplate3Controller } from './controllers/webhook-notification-template3.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WebhookNotificationTemplate3Message])],
  controllers: [WebhookNotificationTemplate3Controller],
  providers: [WebhookNotificationTemplate3Service],
  exports: [WebhookNotificationTemplate3Service],
})
export class WebhookNotificationTemplate3Module {}
