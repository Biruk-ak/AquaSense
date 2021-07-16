/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Naming strategy
 * @copyright Biruk-ak
 */

import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';

export class SnakeNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  tableName(className: string, customName: string): string {
    return customName || className.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }

  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    const name = customName || propertyName.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    return [...embeddedPrefixes, name].join('_');
  }
}
