/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: WebhookNotificationTemplate2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookNotificationTemplate2Message } from './entities/webhook-notification-template2-message.entity';
import { WebhookNotificationTemplate2Service } from './services/webhook-notification-template2.service';
import { WebhookNotificationTemplate2Controller } from './controllers/webhook-notification-template2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WebhookNotificationTemplate2Message])],
  controllers: [WebhookNotificationTemplate2Controller],
  providers: [WebhookNotificationTemplate2Service],
  exports: [WebhookNotificationTemplate2Service],
})
export class WebhookNotificationTemplate2Module {}
