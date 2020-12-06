/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Event bus
 * @copyright Biruk-ak
 */

import { Injectable, Logger } from '@nestjs/common';

type Handler = (payload: Record<string, unknown>) => void | Promise<void>;

@Injectable()
export class EventBusService {
  private readonly logger = new Logger(EventBusService.name);
  private readonly handlers = new Map<string, Handler[]>();

  subscribe(event: string, handler: Handler): void {
    const list = this.handlers.get(event) ?? [];
    list.push(handler);
    this.handlers.set(event, list);
  }

  async publish(event: string, payload: Record<string, unknown>): Promise<void> {
    const list = this.handlers.get(event) ?? [];
    this.logger.debug(`event ${event} handlers=${list.length}`);
    for (const handler of list) {
      await handler(payload);
    }
  }
}
