/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WebhookNotificationTemplate1
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookNotificationTemplate1Message } from './entities/webhook-notification-template1-message.entity';
import { WebhookNotificationTemplate1Service } from './services/webhook-notification-template1.service';
import { WebhookNotificationTemplate1Controller } from './controllers/webhook-notification-template1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WebhookNotificationTemplate1Message])],
  controllers: [WebhookNotificationTemplate1Controller],
  providers: [WebhookNotificationTemplate1Service],
  exports: [WebhookNotificationTemplate1Service],
})
export class WebhookNotificationTemplate1Module {}
