/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Module: InAppNotificationTemplate6
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InAppNotificationTemplate6Message } from './entities/in-app-notification-template6-message.entity';
import { InAppNotificationTemplate6Service } from './services/in-app-notification-template6.service';
import { InAppNotificationTemplate6Controller } from './controllers/in-app-notification-template6.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InAppNotificationTemplate6Message])],
  controllers: [InAppNotificationTemplate6Controller],
  providers: [InAppNotificationTemplate6Service],
  exports: [InAppNotificationTemplate6Service],
})
export class InAppNotificationTemplate6Module {}
