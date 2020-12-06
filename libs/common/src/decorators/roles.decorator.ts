/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Roles decorator
 * @copyright Biruk-ak
 */

import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
