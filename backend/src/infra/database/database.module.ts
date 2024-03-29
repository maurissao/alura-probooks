import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [...databaseProviders, ConfigService],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
