/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WebhookNotificationTemplate6
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookNotificationTemplate6Message } from './entities/webhook-notification-template6-message.entity';
import { WebhookNotificationTemplate6Service } from './services/webhook-notification-template6.service';
import { WebhookNotificationTemplate6Controller } from './controllers/webhook-notification-template6.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WebhookNotificationTemplate6Message])],
  controllers: [WebhookNotificationTemplate6Controller],
  providers: [WebhookNotificationTemplate6Service],
  exports: [WebhookNotificationTemplate6Service],
})
export class WebhookNotificationTemplate6Module {}
