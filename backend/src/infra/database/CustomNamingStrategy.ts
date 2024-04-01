import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';

export class CustomNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  tableName(className: string, customName: string): string {
    return customName ? customName : super.tableName(className, customName);
  }

  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return customName ? customName : super.columnName(propertyName, customName, embeddedPrefixes);
  }

  relationName(propertyName: string): string {
    console.log(propertyName);
    return propertyName;
  }
}
