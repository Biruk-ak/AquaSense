/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Current user
 * @copyright Biruk-ak
 */

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
