/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InAppNotificationTemplate2
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InAppNotificationTemplate2Message } from './entities/in-app-notification-template2-message.entity';
import { InAppNotificationTemplate2Service } from './services/in-app-notification-template2.service';
import { InAppNotificationTemplate2Controller } from './controllers/in-app-notification-template2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InAppNotificationTemplate2Message])],
  controllers: [InAppNotificationTemplate2Controller],
  providers: [InAppNotificationTemplate2Service],
  exports: [InAppNotificationTemplate2Service],
})
export class InAppNotificationTemplate2Module {}
