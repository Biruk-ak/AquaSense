/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InAppNotificationTemplate5
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InAppNotificationTemplate5Message } from './entities/in-app-notification-template5-message.entity';
import { InAppNotificationTemplate5Service } from './services/in-app-notification-template5.service';
import { InAppNotificationTemplate5Controller } from './controllers/in-app-notification-template5.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InAppNotificationTemplate5Message])],
  controllers: [InAppNotificationTemplate5Controller],
  providers: [InAppNotificationTemplate5Service],
  exports: [InAppNotificationTemplate5Service],
})
export class InAppNotificationTemplate5Module {}
